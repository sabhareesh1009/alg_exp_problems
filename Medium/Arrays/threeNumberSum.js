/* Array with non empty integers and need to find three number sum equal to target sum; 
need the retun tha array of all triplets in ascending order */

// O(N^2) time complexity | O(N^2) space complexity 
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const tripplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left_index = i + 1;
    let right_index = array.length - 1;
    while (left_index < right_index) {
      const currentSum = array[i] + array[left_index] + array[right_index];
      if (currentSum === targetSum) {
        tripplets.push([array[i], array[left_index], array[right_index]]);
        left_index++;
        right_index--;
      } else if (currentSum < targetSum) {
        left_index++;
      } else {
        right_index--;
      }
    }
  }
  return tripplets;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
