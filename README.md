# Sorting Algorithm Visualizer

This is a browser-based visualizer for classic sorting algorithms, built with vanilla JavaScript, HTML, and CSS.

**[Live demo](https://isobeldouglass.github.io/SortingAlgorithmVisualizer/)**

## What it does

Create a random array of bars and observe how they are sorted in real time, with a subtle click playing on each comparison/swap.

- **Selection sort** and **bubble sort**, fully implemented
- **Adjustable array size** (5–100 elements) and **adjustable animation speed** via sliders
- **Reset** to restore the array to its last-generated state and re-run a different algorithm on the same data
- Lightweight audio feedback on each swap, generated with the Web Audio API (no audio files)

> **Note:** the "Insertion Sort" button currently runs a gnome sort under the hood — a true insertion sort is implemented in `functions.js` but is commented out because of an animation bug. This is flagged in the app itself and is the main item on the project's to-do list.

## How it's built

- `functions.js` contains the array generation, rendering, and sorting algorithms themselves (`selectionSort`, `bubbleSort`, `gnomeSort`), each yielding control via `await` between steps so the animation can play out
- `animation.js` plays a short sine-wave tone via the Web Audio API on each comparison/swap
- `main.js` wires up the buttons/sliders and manages run state, including a `runID` mechanism so that resetting or restarting a sort mid-animation cleanly cancels the in-flight one instead of racing with it
- `import.js` centralizes DOM element lookups

## Running it locally

No build step or dependencies — it's static HTML/CSS/JS loaded as ES modules.

\`\`\`bash
git clone https://github.com/isobeldouglass/SortingAlgorithmVisualizer.git
cd SortingAlgorithmVisualizer
\`\`\`

Then serve the folder with any static server (opening `index.html` directly won't work because of ES module CORS restrictions):

\`\`\`bash
python3 -m http.server 8000
# or: npx serve
\`\`\`

Visit `http://localhost:8000`.

## Controls

| Action | How |
|---|---|
| Generate a new array | **Generate Array** |
| Set array size | Number input (5–100) |
| Adjust speed | Speed slider |
| Sort | **Selection Sort**, **Insertion Sort** (see note above), or **Bubble Sort** |
| Restore last-generated array | **Reset** |

## Roadmap

Notes left in the project (`notes and thoughts.md`) outline planned improvements:

- Fix the insertion sort animation bug and swap in the real implementation
- Add a step-by-step code walkthrough mode (showing the algorithm's source alongside which variables are being compared/assigned)
- Show numeric values below each bar
- Move from color-coded bars to grayscale with highlighting of the bars currently being compared/moved
- Additional algorithms sketched out for future use: quicksort, merge sort, heap sort