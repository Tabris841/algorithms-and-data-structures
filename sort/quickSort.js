function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // Randomly select pivot element
  let pivotIndex = Math.floor(Math.random() * (end - start + 1)) + start;
  let pivot = arr[pivotIndex];

  // Move pivot element to the start
  swap(arr, start, pivotIndex);
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

const arr = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];

console.log(quickSort(arr));
