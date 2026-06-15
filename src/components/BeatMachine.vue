<template>
  <div class="beat-machine">
    
    <div class="instructions">
      <p class="instructions-text">Use the keyboard or click the buttons to play! Arrow keys are reserved for drums.</p>
      <p class="instructions-text">Built with vanilla Web Audio API, no libraries.</p>
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

    <div class="transport">
        <button class="btn btn-secondary" @click="togglePlay">{{ isPlaying ? '⏹ Stop' : '▶ Play' }}</button>
        <button class="btn btn-secondary" @click="clearPattern">Clear</button>
        <label class="bpm">BPM {{ bpm }}
            <input type="number" min="60" max="200" v-model.number="bpm" @change="bpm = Math.min(200, Math.max(60, bpm || 120))" />
            <input type="range" min="60" max="200" v-model.number="bpm" />
        </label>
        </div>

        <div class="sequencer">
        <div v-for="t in tracks" :key="t.name" class="track" :class="{ synth: t.isSynth }">
            <span class="track-name">{{ t.name }}</span>
            <button
            v-for="i in NUM_STEPS"
            :key="i"
            class="cell"
            :class="{ on: pattern[t.name][i - 1], playing: currentStep === i - 1 }"
            @click="toggleStep(t.name, i - 1)"
            />
        </div>
    </div>
    <button @click="share" class="btn btn-secondary">Share</button>
    <span v-if="shareMsg" class="share-msg">{{ shareMsg }}</span>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
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

const NUM_STEPS = 16
const bpm = ref(120)
const isPlaying = ref(false)
const currentStep = ref(-1)

let nextNoteTime = 0       // audioContext time of the next step
let schedulerStep = 0      // which step (0–15) we'll schedule next
let timerId = null
const lookahead = 25       // ms — how often the timer wakes
const scheduleAheadTime = 0.1  // s — how far ahead we schedule

function secondsPerStep() {
  const safe = Math.min(200, Math.max(60, bpm.value || 120))
  return (60 / safe) / 4
}

function scheduleStep(step, time) {
    for (const t of tracks) {
    if (pattern[t.name][step]) t.play(time)
    }
  // move the visual playhead at the right moment
  const delay = (time - audioContext.currentTime) * 1000
  setTimeout(() => { currentStep.value = step }, Math.max(delay, 0))
}

function scheduler() {
  // schedule every step that falls inside the lookahead window
  while (nextNoteTime < audioContext.currentTime + scheduleAheadTime) {
    scheduleStep(schedulerStep, nextNoteTime)
    nextNoteTime += secondsPerStep()
    schedulerStep = (schedulerStep + 1) % NUM_STEPS
  }
}

function start() {
  if (isPlaying.value) return
  ensureAudio()
  isPlaying.value = true
  schedulerStep = 0
  nextNoteTime = audioContext.currentTime + 0.05   // tiny offset so step 0 isn't late
  timerId = setInterval(scheduler, lookahead)
}

function stop() {
  isPlaying.value = false
  clearInterval(timerId)
  timerId = null
  currentStep.value = -1
}

function togglePlay() {
  isPlaying.value ? stop() : start()
}

function ensureAudio() {
  if (!audioContext) {
    audioContext = new AudioContext()
    masterGain = audioContext.createGain()
    masterGain.gain.value = 0.2
    masterGain.connect(audioContext.destination)
  }
  if (audioContext.state === 'suspended') audioContext.resume()
}

function playKick(time) {
  ensureAudio()
  const t = time ?? audioContext.currentTime
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

function playWhiteNoise(time) {
    ensureAudio()
    const t = time ?? audioContext.currentTime
    const whiteNoiseSource = createNoiseSource()
    whiteNoiseSource.connect(masterGain)
    whiteNoiseSource.start(t)
}

function playSnare(time) {
    ensureAudio()
    const t = time ?? audioContext.currentTime
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

    whiteNoiseSource.start(t)
    whiteNoiseSource.stop(t + 0.2);

    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2)
    osc.connect(gain)
    gain.connect(masterGain)
    osc.start(t)
    osc.stop(t + 0.2)
}

function playBuffer(buffer, time) {
  if (!buffer) return            // not loaded yet → no-op
  ensureAudio()
  const source = audioContext.createBufferSource()
  source.buffer = buffer
  source.connect(masterGain)     // route through master, not destination
  source.start(time ?? audioContext.currentTime)
}
const playClap  = (time) => playBuffer(clapBuffer, time)
const playHiHat = (time) => playBuffer(hihatBuffer, time)

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

const tracks = [
  ...drums,
  ...keys.map(k => ({
    name: k.note,
    play: (time) => playSynth(k, time, secondsPerStep() * 0.9),
    isSynth: true,
  })),
]

// grid: { Kick: [false×16], Snare: [...], ... } keyed by track name
const pattern = reactive(
  Object.fromEntries(tracks.map(t => [t.name, Array(NUM_STEPS).fill(false)]))
)

function toggleStep(name, i) {
  pattern[name][i] = !pattern[name][i]
}

function playSynth(note, time, duration = 0.8) {
    ensureAudio()
    const t = time ?? audioContext.currentTime
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

    const attack  = Math.min(0.02, duration * 0.2)
    const release = Math.min(0.05, duration * 0.3)
    noteGain.gain.setValueAtTime(0, t)
    noteGain.gain.linearRampToValueAtTime(1, t + attack)
    noteGain.gain.setValueAtTime(1, t + duration - release)   // hold
    noteGain.gain.linearRampToValueAtTime(0, t + duration)    // release

    osc.connect(noteGain)
    noteGain.connect(masterGain)
    osc.start(t)
    osc.stop(t + duration)
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

function clearPattern() {
  for (const t of tracks) pattern[t.name].fill(false)
}

function encodeBeat() {
  const hex = tracks.map(t => {
    const bits = pattern[t.name].reduce((acc, on, i) => acc | (on ? 1 << i : 0), 0)
    return bits.toString(16).padStart(4, '0')
  }).join('')
  return `${Math.round(bpm.value)}.${hex}`
}

function decodeBeat(str) {
  const [bpmStr, hex] = str.split('.')
  const n = Number(bpmStr)
  if (Number.isFinite(n)) bpm.value = Math.min(200, Math.max(60, n))
  tracks.forEach((t, idx) => {
    const bits = parseInt(hex.slice(idx * 4, idx * 4 + 4), 16)
    for (let i = 0; i < NUM_STEPS; i++) {
      pattern[t.name][i] = Boolean(bits & (1 << i))
    }
  })
}

const shareMsg = ref('')
async function share() {
  const url = `${window.location.origin}${window.location.pathname}?beat=${encodeBeat()}`
  try {
    await navigator.clipboard.writeText(url)
    shareMsg.value = 'Link copied!'
  } catch {
    shareMsg.value = url   // fallback: show it so they can copy manually
  }
  setTimeout(() => { shareMsg.value = '' }, 2500)
}

onMounted(async () => {
    const beat = new URLSearchParams(window.location.search).get('beat')
    if (beat) {
    try { decodeBeat(beat) } catch (e) { /* ignore malformed links */ }
    }
  ensureAudio()
  ;[clapBuffer, hihatBuffer] = await Promise.all([loadSample(clapUrl), loadSample(hihatUrl)])
  document.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    clearInterval(timerId)
})
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

.transport { display: flex; align-items: center; gap: 1rem; margin-top: 1.5rem; margin-bottom: 1.5rem; }

.track { display: flex; align-items: center; gap: 4px; margin-bottom: 6px; }

.track-name { width: 64px; font-size: 0.85rem; color: #fff; }

.cell {
  width: 28px; height: 28px; border-radius: 4px; cursor: pointer;
  border: 1px solid rgba(255,255,255,0.15);
  background: #2c2c2c;
}
.cell.on { background: var(--color-accent); } 

.cell.playing { outline: 2px solid #fff; outline-offset: -2px; }

.cell.on.playing { filter: brightness(1.4); } 

.transport input[type="number"] {
  height: 2.5em;
  width: 4rem;
  color: var(--color-accent);
  font-weight: 600;
  background-color: transparent;
  border: 2px solid var(--color-accent);
  border-radius: 0.5em;
  box-shadow: 0 4px 0 0px rgba(0,0,0,0.2);
  text-align: center;
  margin-inline: 0.5rem;
}

.transport input[type="range"] { accent-color: var(--color-accent); }

.transport input[type="number"]::-webkit-inner-spin-button,
.transport input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.transport input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.share-msg {
  margin-left: 1rem;
  color: var(--color-text);
  font-size: 0.9rem;
  overflow-wrap: anywhere;
}

.instructions-text {
  color: #fff;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.bpm {
    color: #fff;
}

.cell {
  flex-shrink: 0;
}

.track-name {
  flex-shrink: 0;
  white-space: nowrap;
}

.track { width: max-content; }

@media (max-width: 700px) {
  .beat-machine {
    margin-top: 2rem;
  }
  .sequencer {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    }
  .transport {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>