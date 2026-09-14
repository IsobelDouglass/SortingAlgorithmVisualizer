# Sorting Algorithm Visualizer

This is a browser-based visualizer for classic sorting algorithms, built with vanilla JavaScript, HTML, and CSS.

[Live demo](https://isobeldouglass.github.io/SortingAlgorithmVisualizer/)

Create a random array of bars and observe how they are sorted in real time, with a subtle click playing on each comparison/swap.

## Features

- Selection sort and bubble sort
- Array size (5-100) and speed sliders
- Reset button to restore the last-generated array so you can compare algorithms on the same data
- Web Audio API tones on each swap, no audio files

Heads up: the "Insertion Sort" button is currently running gnome sort — there's a real insertion sort written in `functions.js` but it's commented out because of an animation bug I haven't fixed yet. Noted in the footer of the app too.

## Files

- `functions.js` — array generation, rendering, and the sorts themselves
- `animation.js` — the swap sound (Web Audio, sine wave)
- `main.js` — button/slider wiring, and a runID system so restarting or resetting mid-sort doesn't race with the animation still playing
- `import.js` — DOM element references

## Running locally

```bash
git clone https://github.com/isobeldouglass/SortingAlgorithmVisualizer.git
cd SortingAlgorithmVisualizer
python3 -m http.server 8000
```

Open `http://localhost:8000`. (Needs to be served over http, not opened as a file directly — it uses ES modules.)

## To do

From my notes file:
- fix insertion sort's animation bug and swap in the real implementation
- step-by-step walkthrough mode showing the code + which variables are being compared/assigned
- numbers under the bars
- switch from colored bars to grayscale, highlight whatever's currently being compared/moved
- quicksort, merge sort, heap sort are sketched out but not hooked up yet