add a walk through function for one of the algorithms that shows the code and shows the variables being compared and assigned. (preferably insertion sort)

make it so that there is the number value of the value visible below the bars (font - Courier?)

get rid of color coded blocks and make the algo highlight the blocks theyre working on / moving. Change the colors into grayscale

list of sorting algorithms
function quickSort(array, start, end) {
  if (start === undefined) {
    start = 0;
    end = array.length - 1;
  } else if (start >= end) {
    return array;
  }
  var rStart = start, rEnd = end;
  var pivot = array[Math.floor(Math.random() * (end - start + 1) + start)];
  while (start < end) {
    while (array[start] <= pivot) start++;
    while (array[end] > pivot) end--;
    if (start < end) {
      var temp = array[start];
      array[start] = array[end];
      array[end] = temp;
    }
  }
  quickSort(array, rStart, start - 1);
  quickSort(array, start, rEnd);
}
////////////////////////////////////////////////////////////////////////////////////
function mergeSort(array) {
  const half = array.length / 2

  if (array.length < 2){
    return array
  }

  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}

function merge(left, right) {
    let arr = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return [ ...arr, ...left, ...right ]
}
////////////////////////////////////////////////////////////////////////////////////
function heapSort(array) {
  let size = array.length

  for (let i = Math.floor(size / 2 - 1); i >= 0; i--)
    heapify(array, size, i)

  for (let i = size - 1; i >= 0; i--) {
    let temp = array[0]
    array[0] = array[i]
    array[i] = temp
    heapify(array, i, 0)
  }
}

function heapify(array, size, i) {
  let max = i
  let left = 2 * i + 1
  let right = 2 * i + 2

  if (left < size && array[left] > array[max])
    max = left

  if (right < size && array[right] > array[max])
    max = right

  if (max != i) {
    let temp = array[i]
    array[i] = array[max]
    array[max] = temp

    heapify(array, size, max)
  }
}
////////////////////////////////////////////////////////////////////////////////////
function insertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}
////////////////////////////////////////////////////////////////////////////////////
function gnomeSort(arr) {
    function moveBack(i) {
        for( ; i > 0 && arr[i-1] > arr[i]; i--) {
            var t = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = t;
        }
    }
    for (var i = 1; i < arr.length; i++) {
        if (arr[i-1] > arr[i]) moveBack(i);
    }
}
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////