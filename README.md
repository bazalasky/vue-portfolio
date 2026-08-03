# WebAudioBeatMachine

A browser-based drum machine and synthesizer built with vanilla JavaScript and the native [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) — no frameworks, no audio libraries.

## Overview

WebAudioBeatMachine generates all of its sounds in real time using low-level Web Audio primitives rather than pre-recorded samples alone. A single shared `AudioContext` drives sound synthesis and playback across the app.

## Features

- **Oscillator-based sound synthesis** — different waveform shapes (sine, square, sawtooth, triangle) are used to generate distinct drum and synth voices
- **Pitch control** — frequency parameters shape the pitch of each sound
- **Volume & fade envelopes** — `GainNode`s control volume and create fade-in/fade-out effects
- **Playback scheduling** — buffering controls sound delay and timing
- **Dual input support** — every sound can be triggered via on-screen buttons or keyboard shortcuts, both wired up through event listeners

## Tech Stack

- Vanilla JavaScript (no frameworks or audio libraries)
- Web Audio API (`AudioContext`, `OscillatorNode`, `GainNode`)
- HTML/CSS

## How It Works

1. An `AudioContext` is created once and shared across the app.
2. Each sound (drum hit or synth note) is generated on demand using an `OscillatorNode` configured with a specific waveform type and frequency.
3. The oscillator is routed through a `GainNode`, which shapes the volume envelope (attack/fade) before reaching the audio output.
4. Playback timing is controlled to schedule when sounds start and stop.
5. Event listeners bind both mouse clicks (on-screen buttons) and keydown events (keybinds) to the same sound-triggering logic, so either input method plays the same sounds.

## Running Locally

Clone the repo and open `index.html` in a browser — no build step or dependencies required.

```bash
git clone https://github.com/bazalasky/WebAudioBeatMachine.git
cd WebAudioBeatMachine
open index.html
```

## Why This Project

Built to explore audio programming fundamentals — sound synthesis, signal routing, and real-time playback scheduling — using nothing but the browser's native audio APIs.
