const generateButton = document.getElementById("generate-button");

const menuButton = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");
const speedSlider = document.getElementById("speed-slider");

const displayContainer = document.getElementById("display-container");

const selectionSort = document.getElementById("selection-sort");
const insertionSort = document.getElementById("insertion-sort");
const bubbleSort = document.getElementById("bubble-sort");

const arraySize = document.getElementById("array-size");
const arraySizeValue = document.getElementById("array-size-value");

const resetButton = document.getElementById("reset-button");

export { generateButton as generateBtn, menuButton as menuBtn, dropdownContent, displayContainer, selectionSort as selectionSortBtn, insertionSort as insertionSortBtn, bubbleSort as bubbleSortBtn, arraySize, arraySizeValue, speedSlider, resetButton };