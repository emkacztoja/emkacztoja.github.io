const arrayContainer = document.getElementById('array-container');
const delayInput = document.getElementById('delay');
const lengthInput = document.getElementById('length');
let array = [];
let audioContext = null; // Persistent AudioContext

function generateArray() {
    const length = parseInt(lengthInput.value) || 20;
    arrayContainer.innerHTML = '';
    array = Array.from({ length }, () => Math.floor(Math.random() * 100) + 10);

    const containerHeight = 300;
    const maxArrayValue = Math.max(...array);
    const barWidth = Math.max(10, Math.floor(800 / length));
    const gap = 1;

    arrayContainer.style.gap = `${gap}px`;

    array.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${(value / maxArrayValue) * containerHeight}px`;
        bar.style.width = `${barWidth}px`;
        arrayContainer.appendChild(bar);
    });
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Play sound using a persistent AudioContext
function playSound(value) {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(value * 10, audioContext.currentTime); // Frequency maps to value
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime); // Volume

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1); // Short sound burst
}

async function highlightBars(indexes, color) {
    const bars = document.querySelectorAll('.bar');
    indexes.forEach(index => {
        bars[index].style.backgroundColor = color;
    });
}

async function resetBars(indexes) {
    const bars = document.querySelectorAll('.bar');
    indexes.forEach(index => {
        bars[index].style.backgroundColor = '#007bff';
    });
}

async function bubbleSort() {
    const bars = document.querySelectorAll('.bar');
    const delayTime = parseInt(delayInput.value) || 300;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            await highlightBars([j, j + 1], 'red');

            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];

                bars[j].style.height = `${(array[j] / Math.max(...array)) * 300}px`;
                bars[j + 1].style.height = `${(array[j + 1] / Math.max(...array)) * 300}px`;

                playSound(array[j]);
                playSound(array[j + 1]);
            }

            await delay(delayTime);
            await resetBars([j, j + 1]);
        }
    }
}

async function bogoSort() {
    const bars = document.querySelectorAll('.bar');
    const delayTime = parseInt(delayInput.value) || 300;

    while (!isSorted(array)) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];

            bars[i].style.height = `${(array[i] / Math.max(...array)) * 300}px`;
            bars[j].style.height = `${(array[j] / Math.max(...array)) * 300}px`;

            playSound(array[i]);
            playSound(array[j]);
        }

        await delay(delayTime);
    }
}

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) return false;
    }
    return true;
}

async function insertionSort() {
    const bars = document.querySelectorAll('.bar');
    const delayTime = parseInt(delayInput.value) || 300;

    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;

        await highlightBars([i], 'red');

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            bars[j + 1].style.height = `${(array[j + 1] / Math.max(...array)) * 300}px`;

            playSound(array[j + 1]);

            j--;

            await delay(delayTime);
        }

        array[j + 1] = key;
        bars[j + 1].style.height = `${(key / Math.max(...array)) * 300}px`;

        playSound(array[j + 1]);

        await resetBars([i]);
    }
}

async function mergeSort(start = 0, end = array.length) {
    if (end - start > 1) {
        const mid = Math.floor((start + end) / 2);
        await mergeSort(start, mid);
        await mergeSort(mid, end);
        await merge(start, mid, end);
    }
}

async function merge(start, mid, end) {
    const bars = document.querySelectorAll('.bar');
    const left = array.slice(start, mid);
    const right = array.slice(mid, end);
    let i = start;

    while (left.length && right.length) {
        await highlightBars([i], 'red');

        array[i] = left[0] < right[0] ? left.shift() : right.shift();
        bars[i].style.height = `${(array[i] / Math.max(...array)) * 300}px`;

        playSound(array[i]);

        await delay(parseInt(delayInput.value) || 300);
        await resetBars([i]);

        i++;
    }

    while (left.length) {
        array[i] = left.shift();
        bars[i].style.height = `${(array[i] / Math.max(...array)) * 300}px`;

        playSound(array[i]);

        i++;
    }

    while (right.length) {
        array[i] = right.shift();
        bars[i].style.height = `${(array[i] / Math.max(...array)) * 300}px`;

        playSound(array[i]);

        i++;
    }
}

async function quickSort(start = 0, end = array.length - 1) {
    if (start < end) {
        const pivotIndex = await partition(start, end);
        await quickSort(start, pivotIndex - 1);
        await quickSort(pivotIndex + 1, end);
    }
}

async function partition(start, end) {
    const bars = document.querySelectorAll('.bar');
    const pivot = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        await highlightBars([i, end], 'red');

        if (array[i] < pivot) {
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            bars[i].style.height = `${(array[i] / Math.max(...array)) * 300}px`;
            bars[pivotIndex].style.height = `${(array[pivotIndex] / Math.max(...array)) * 300}px`;

            playSound(array[i]);
            playSound(array[pivotIndex]);

            pivotIndex++;
        }

        await delay(parseInt(delayInput.value) || 300);
        await resetBars([i, end]);
    }

    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    bars[pivotIndex].style.height = `${(array[pivotIndex] / Math.max(...array)) * 300}px`;
    bars[end].style.height = `${(array[end] / Math.max(...array)) * 300}px`;

    playSound(array[pivotIndex]);
    playSound(array[end]);

    return pivotIndex;
}

async function selectionSort() {
    const bars = document.querySelectorAll('.bar');
    const delayTime = parseInt(delayInput.value) || 300;

    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        await highlightBars([i], 'red');

        for (let j = i + 1; j < array.length; j++) {
            await highlightBars([j], 'red');

            if (array[j] < array[minIndex]) {
                minIndex = j;
            }

            await delay(delayTime);
            await resetBars([j]);
        }

        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            bars[i].style.height = `${(array[i] / Math.max(...array)) * 300}px`;
            bars[minIndex].style.height = `${(array[minIndex] / Math.max(...array)) * 300}px`;

            playSound(array[i]);
            playSound(array[minIndex]);
        }

        await resetBars([i]);
    }
}

generateArray();
