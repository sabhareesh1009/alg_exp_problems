/**
 Need to find the given array is monotonic or not 
 i.e: monotonic array doesn't conssits from left to right enitrly non-increasing or non-decreasing
 if empty or with one element, then return true
 */

// Both solutions are O(N) time complexity | O(1) space complexity
function isMonotonic(array) {
  // Write your code here.
  if (array.length === 0 || array.length === 1) {
    return true;
  }
  let flag = "";
  for (let i = 0; i < array.length - 1; i++) {
    if (flag) {
      if (flag === "INCE" && array[i + 1] < array[i]) {
        return false;
      }
      if (flag === "DESC" && array[i + 1] > array[i]) {
        return false;
      }
    } else {
      if (array[i + 1] > array[i]) flag = "INCE";
      else if (array[i + 1] < array[i]) flag = "DESC";
      else continue;
    }
  }
  return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;

