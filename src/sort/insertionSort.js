function insertionSort(arr) {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([2, 5, 1, 6, 9, 3]));
// console.log(insertionSort([5, 3, 8, 2, 1, 4]));
