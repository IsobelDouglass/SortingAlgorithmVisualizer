import * as elements from "./import.js";
import * as functions from "./functions.js";

elements.resetButton.addEventListener("click", () => {
    functions.renderArray(elements.displayContainer, functions.output);
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
    array = [...originalArray];
    functions.renderArray(container, array);
    await functions.selectionSort(array, container, functions.renderArray, 2000 - elements.speedSlider.value);
});

elements.insertionSortBtn.addEventListener("click", async () => {
    array = [...originalArray];
    functions.renderArray(container, array);
    await functions.insertionSort(array, container, functions.renderArray, 2000 - elements.speedSlider.value);
});

elements.bubbleSortBtn.addEventListener("click", async () => {
    array = [...originalArray];
    functions.renderArray(container, array);
    await functions.bubbleSort(array, container, functions.renderArray, 2000 - elements.speedSlider.value);
});