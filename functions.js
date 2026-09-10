import * as animate from "./animation.js";

let output = [];

function generateArray(num) {
    output = []; // Clear the output array before generating a new one
    for (let j = 0; j < num; j++) {
        let randomValue = Math.floor(Math.random() * 10) + 1;
        output.push(randomValue);
    }
    return output;
}

function renderArray(element, array) {
    element.replaceChildren();
    for (let i = 0; i < array.length; i++) {
        let div = document.createElement("div");
        div.className = "array-element";
        div.classList.add("value-" + array[i]);
        element.appendChild(div);
    }
    return element;
}

async function selectionSort(array, container, render, speed) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            render(container, array);
            try {
                animate.playSoundAndAnimation(array[i], i, minIndex, i, minIndex, 500);
            } catch (e) {
                console.error("Sound error:", e);
            }
            await animate.sleep(speed);
        }
    }
    return array;
}

/*
async function insertionSort(array, container, render, speed) {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
            render(container, array);
            try {
                animate.playSoundAndAnimation(array[j + 1], j, j + 1, j, j + 1, 500);
            } catch (e) {
                console.error("Sound error:", e);
            }
            await animate.sleep(speed);
        }
        array[j + 1] = key;
        render(container, array);
    }
    return array;
}
*/

async function gnomeSort(array, container, render, speed) {
    let index = 0;
    let n = array.length;
    while (index < n) {
        if (index === 0) {
            index++;
        }
        if (array[index] >= array[index - 1]) {
            index++;
        } else {
            [array[index], array[index - 1]] = [array[index - 1], array[index]];
            render(container, array);
            try {
                animate.playSoundAndAnimation(array[index], index, index - 1, index, index - 1, 500);
            } catch (e) {
                console.error("Sound error:", e);
            }
            await animate.sleep(speed);
            index--;
        }
    }
    return array;
}

async function bubbleSort(array, container, render, speed) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                render(container, array);
                try {
                    animate.playSoundAndAnimation(array[j], j, j + 1, j, j + 1, 500);
                } catch (e) {
                    console.error("Sound error:", e);
                }
                await animate.sleep(speed);
            }
        }
    }
    return array;
}


export { generateArray, selectionSort, bubbleSort, gnomeSort as insertionSort, renderArray, output };