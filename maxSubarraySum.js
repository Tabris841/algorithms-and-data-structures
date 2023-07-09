function maxSubarraySum(arr, len) {
  if (len > arr.length) {
    return null;
  }

  let currSum = 0;

  for (let i = 0; i < len; i++) {
    currSum += arr[i];
  }

  let start = 0;
  let end = len;
  let maxSum = currSum;

  while (end < arr.length) {
    currSum = currSum - arr[start] + arr[end];

    if (currSum > maxSum) {
      maxSum = currSum;
    }

    start += 1;
    end += 1;
  }

  return maxSum;
}

// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null;

//   let total = 0;
//   for (let i = 0; i < num; i++) {
//     total += arr[i];
//   }
//   let currentTotal = total;
//   for (let i = num; i < arr.length; i++) {
//     currentTotal += arr[i] - arr[i - num];
//     total = Math.max(total, currentTotal);
//   }
//   return total;
// }

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));
