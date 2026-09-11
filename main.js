import * as elements from "./import.js";
import * as functions from "./functions.js";

let isRunning = false;
let runID = 0;
let currentRunID = 0;

// Callback to check if current sort should continue
const shouldContinue = (passedRunID) => passedRunID === currentRunID;

elements.resetButton.addEventListener("click", () => {
    // Immediately pause and halt any running sort
    isRunning = false;
    runID++;
    currentRunID = 0; // Reset currentRunID so shouldContinue returns false
    // Reset array to original
    array = [...originalArray];
    functions.renderArray(elements.displayContainer, array);
});

let array;
let container;
let originalArray;

window.addEventListener("DOMContentLoaded", () => {
    let sizeArray = parseInt(elements.arraySize.value);
    array = functions.generateArray(sizeArray);
    originalArray = [...array];
    container = elements.displayContainer;
    functions.renderArray(container, array);
});

elements.arraySize.addEventListener("blur", () => {
    if (elements.arraySize.value < 5) {
        elements.arraySize.value = 5;
    } else if (elements.arraySize.value > 100) {
        elements.arraySize.value = 100;
    }
    elements.arraySizeValue.innerText = elements.arraySize.value;
});

elements.speedSlider.addEventListener("input", () => {
    elements.speedSlider.value = elements.speedSlider.value;
});

elements.generateBtn.addEventListener("click", () => {
    let sizeArray = parseInt(elements.arraySize.value);
    array = functions.generateArray(sizeArray);
    originalArray = [...array];
    container = elements.displayContainer;
    functions.renderArray(container, array);
});

elements.selectionSortBtn.addEventListener("click", async () => {
    isRunning = true;
    currentRunID = ++runID;
    array = [...originalArray];
    functions.renderArray(container, array);
    await functions.selectionSort(array, container, functions.renderArray, 2000 - elements.speedSlider.value, currentRunID, shouldContinue);
    if (currentRunID === runID) isRunning = false;
});

elements.insertionSortBtn.addEventListener("click", async () => {
    isRunning = true;
    currentRunID = ++runID;
    array = [...originalArray];
    functions.renderArray(container, array);
    await functions.insertionSort(array, container, functions.renderArray, 2000 - elements.speedSlider.value, currentRunID, shouldContinue);
    if (currentRunID === runID) isRunning = false;
});

elements.bubbleSortBtn.addEventListener("click", async () => {
    isRunning = true;
    currentRunID = ++runID;
    array = [...originalArray];
    functions.renderArray(container, array);
    await functions.bubbleSort(array, container, functions.renderArray, 2000 - elements.speedSlider.value, currentRunID, shouldContinue);
    if (currentRunID === runID) isRunning = false;
});