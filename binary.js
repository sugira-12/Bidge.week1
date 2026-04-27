function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    // Calculate the middle index
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // Target found!
    }

    if (arr[mid] < target) {
      // Target is in the right half, move start pointer
      start = mid + 1;
    } else {
      // Target is in the left half, move end pointer
      end = mid - 1;
    }
  }

  return -1; // Target not found
}

const myNumbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log(binarySearch(myNumbers, 23)); // Output: 5