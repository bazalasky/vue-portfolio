<template>
  <div class="beat-machine">
    
    <div class="instructions">
      <p>Use the keyboard or click the buttons to play! Arrow keys are reserved for drums.</p>
      <p>Built with vanilla Web Audio API, no libraries.</p>
      <p></p>
    </div>

    <div class="piano">
      <button
        v-for="key in keys"
        :key="key.note"
        :class="{ sharp: key.isSharp, active: activeKey === key.keyboardKey }"
        @click="key.play()"
      >
        {{ showLabels ? key.keyboardKey : '' }}
      </button>
    </div>

    <div class="drums">
        <button v-for="drum in drums" :key="drum.name" @click="drum.play()">
            {{ drum.name }}
            <span v-if="showLabels && drum.keyLabel" class="keybind">{{ drum.keyLabel }}</span>
        </button>
    </div>

    <button class="btn btn-secondary" @click="showLabels = !showLabels">
      {{ showLabels ? 'Hide' : 'Show' }} labels
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import clapUrl from '@/assets/samples/clap.wav'
import hihatUrl from '@/assets/samples/samples_hihat.wav'

// --- audio context + master gain ---
let audioContext = null
let masterGain = null
let clapBuffer = null
let hihatBuffer = null

// --- UI state ---
const showLabels = ref(true)
const activeKey = ref(null)   // for press feedback

// --- the key map
const keys = [
    { note: 'Middle-C', frequency: 261.63, keyboardKey: 'q', isSharp: false },
    { note: 'C#',       frequency: 277.18, keyboardKey: '2', isSharp: true  },
    { note: 'D',        frequency: 293.66, keyboardKey: 'w', isSharp: false },
    { note: 'D#',       frequency: 311.13, keyboardKey: '3', isSharp: true  },
    { note: 'E',        frequency: 329.63, keyboardKey: 'e', isSharp: false },
    { note: 'F',        frequency: 349.23, keyboardKey: 'r', isSharp: false },
    { note: 'F#',       frequency: 369.99, keyboardKey: '5', isSharp: true  },
    { note: 'G',        frequency: 392.00, keyboardKey: 't', isSharp: false },
    { note: 'G#',       frequency: 415.30, keyboardKey: '6', isSharp: true  },
    { note: 'A',        frequency: 440.00, keyboardKey: 'y', isSharp: false },
    { note: 'A#',       frequency: 466.16, keyboardKey: '7', isSharp: true  },
    { note: 'B',        frequency: 493.88, keyboardKey: 'u', isSharp: false },
    { note: 'High-C',   frequency: 523.25, keyboardKey: 'i', isSharp: false },
]

function ensureAudio() {
  if (!audioContext) {
    audioContext = new AudioContext()
    masterGain = audioContext.createGain()
    masterGain.gain.value = 0.2
    masterGain.connect(audioContext.destination)
  }
  if (audioContext.state === 'suspended') audioContext.resume()
}

function playKick() {
  ensureAudio()
  const t = audioContext.currentTime
  const osc = audioContext.createOscillator()
  const gain = audioContext.createGain()

  osc.connect(gain)
  gain.connect(masterGain)

  osc.frequency.setValueAtTime(150, t)
  osc.frequency.exponentialRampToValueAtTime(0.001, t + 0.5)
  gain.gain.setValueAtTime(1, t)
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5)

  osc.start(t)
  osc.stop(t + 0.5)
}

function createNoiseSource(seconds = 0.5) {
  const buffer = audioContext.createBuffer(1, audioContext.sampleRate * seconds, audioContext.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
  const source = audioContext.createBufferSource()
  source.buffer = buffer
  return source
}

function playWhiteNoise() {
    ensureAudio()
    const whiteNoiseSource = createNoiseSource()
    whiteNoiseSource.connect(masterGain)
    whiteNoiseSource.start()
}

function playSnare() {
    ensureAudio()
    const t = audioContext.currentTime
    const osc = audioContext.createOscillator()
    const gain = audioContext.createGain()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(100, t)
    gain.gain.setValueAtTime(0.7, t)

    const filter = audioContext.createBiquadFilter()
    filter.type = 'highpass'
    filter.frequency.value = 1500
    filter.connect(masterGain)

    const whiteNoiseGain = audioContext.createGain();
    whiteNoiseGain.gain.setValueAtTime(1, t);
    whiteNoiseGain.gain.exponentialRampToValueAtTime(
        0.01, 
        t + 0.2
    );
    const whiteNoiseSource = createNoiseSource(0.2);
    whiteNoiseSource.connect(whiteNoiseGain);
    whiteNoiseGain.connect(filter);

    whiteNoiseSource.start()
    whiteNoiseSource.stop(t + 0.2);

    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2)
    osc.connect(gain)
    gain.connect(masterGain)
    osc.start(t)
    osc.stop(t + 0.2)
}

function playBuffer(buffer) {
  if (!buffer) return            // not loaded yet → no-op
  ensureAudio()
  const source = audioContext.createBufferSource()
  source.buffer = buffer
  source.connect(masterGain)     // route through master, not destination
  source.start()
}
const playClap  = () => playBuffer(clapBuffer)
const playHiHat = () => playBuffer(hihatBuffer)

async function loadSample(url) {
  const res = await fetch(url)
  const arr = await res.arrayBuffer()
  return await audioContext.decodeAudioData(arr)
}

const drums = [
  { name: 'Kick',   keyLabel: '↓', play: playKick },
  { name: 'Snare',  keyLabel: '←', play: playSnare },
  { name: 'Clap',   keyLabel: '↑', play: playClap },
  { name: 'Hi-Hat', keyLabel: '→', play: playHiHat },
]

function playSynth(note) {
    ensureAudio()
    const t = audioContext.currentTime
    const osc = audioContext.createOscillator()
    osc.type = 'square';
    osc.frequency.setValueAtTime(note.frequency, t)
    const noteGain = audioContext.createGain()

    const vibrato = audioContext.createOscillator()
    vibrato.frequency.setValueAtTime(10, t)
    const vibratoGain = audioContext.createGain()
    vibratoGain.gain.setValueAtTime(1.5, t)
    vibrato.connect(vibratoGain)
    vibratoGain.connect(osc.frequency)
    vibrato.start(t)
    vibrato.stop(t + 1)

    const attackTime = 0.2;
    const decayTime = 0.3;
    const sustainLevel = 0.7;
    const releaseTime = 0.2;

    noteGain.gain.setValueAtTime(0, t)
    noteGain.gain.linearRampToValueAtTime(1, t + attackTime)
    noteGain.gain.linearRampToValueAtTime(sustainLevel, t + attackTime + decayTime)
    noteGain.gain.setValueAtTime(sustainLevel, t + 1 - releaseTime)
    noteGain.gain.linearRampToValueAtTime(0, t + 1);

    osc.connect(noteGain)
    noteGain.connect(masterGain)
    osc.start(t)
    osc.stop(t + 1)
}

keys.forEach(key => {
    key.play = () => {
        activeKey.value = key.keyboardKey
        playSynth(key)
        setTimeout(() => { activeKey.value = null }, 150)
    }
})

function handleKeydown(e) {
  if (e.repeat) return 
  if (e.key === 'ArrowUp')    return playClap()
  if (e.key === 'ArrowLeft')  return playSnare()
  if (e.key === 'ArrowDown')  return playKick()
  if (e.key === 'ArrowRight') return playHiHat()
  const match = keys.find(k => k.keyboardKey === e.key)
  if (match) match.play()
}

onMounted(async () => {
  ensureAudio()
  ;[clapBuffer, hihatBuffer] = await Promise.all([loadSample(clapUrl), loadSample(hihatUrl)])
  document.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => document.removeEventListener('keydown', handleKeydown))
</script>

<style scoped>
.beat-machine {
  max-width: 720px;
  margin: 8rem auto 2rem;
  padding: 2rem;
  background: #222222;
  border: 1px solid rgba(84, 84, 84, 0.48);
  border-radius: 20px;
}

.drums { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 2rem; }

.drums button {
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  gap: 0.4rem;
  flex: 1; 
  min-width: 90px; 
  padding: 1.5rem 1rem;
  border: none;
  border-radius: 12px;
  transition: transform 0.05s ease, box-shadow 0.05s ease;
  background: linear-gradient(45deg, rgb(26, 25, 25) 0%, rgb(36, 35, 35) 100%);
  color: #fff;
  cursor: pointer; font-size: 1rem;
  box-shadow: 0 8px 16px 0 rgba(2, 173, 110, 0.55), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.keybind {
  font-size: 0.75rem;
  opacity: 0.7;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  padding: 0 0.4rem;
}

.drums button:hover { filter: brightness(1.08); }

.drums button:active {
  transform: translateY(2px);
  box-shadow: 0 4px 18px 0 rgba(2, 173, 110, 0.85), 0 4px 12px 0 rgba(0, 0, 0, 0.25);
}

.piano { display: flex; justify-content: center; margin-bottom: 2rem; }

.piano button {       /* white keys */
  width: 46px; height: 180px;
  background: #fff; color: #1a1a1a;
  border: 1px solid var(--color-border); border-radius: 0 0 6px 6px;
  cursor: pointer;
}

.piano button.sharp { /* black keys */
  width: 30px; height: 110px;
  background: #1a1a1a; color: #fff;
  margin: 0 -15px;     /* = half the sharp width → pulls whites in to overlap */
  z-index: 2; position: relative;
}

.piano button.active { background: var(--color-accent); color: var(--color-accent-contrast); }

@media (max-width: 700px) {
  .piano { overflow-x: auto; justify-content: flex-start; }
}
</style>