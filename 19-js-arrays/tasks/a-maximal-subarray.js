console.log(
  getMaxSubSum([-1, 2, 3, -9]) == 5 &&
    getMaxSubSum([2, -1, 2, 3, -9]) == 6 &&
    getMaxSubSum([-1, 2, 3, -9, 11]) == 11 &&
    getMaxSubSum([-2, -1, 1, 2]) == 3 &&
    getMaxSubSum([100, -9, 2, -3, 5]) == 100 &&
    getMaxSubSum([1, 2, 3]) == 6 &&
    getMaxSubSum([-1, -2, -3]) == 0
);

function getMaxSubSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    const sum = getInnerSum(arr, i);
    if (sum > maxSum) {
      maxSum = sum;
    } else {
      break;
    }
  }
}

console.log(getInnerSum([-1, 2, 3, -9], 0));
console.log(getInnerSum([2, -1, 2, 3, -9], 0));
console.log(getInnerSum([-1, 2, 3, -9, 11], 1));

function getInnerSum(arr, pivot) {
  let sum = undefined;
  let maxSum = undefined;
  for (let j = pivot; j < arr.length; j++) {
    if (sum == null) {
      arr[j];
    }
    sum += arr[j];
    if (sum >= maxSum) {
      maxSum = sum;
    } else {
      break;
    }
  }
  return maxSum;
}
