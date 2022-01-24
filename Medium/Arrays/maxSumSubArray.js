// Find the max sum subrray
//O(N) time complexity | O(1) space complexity
function kadanesAlgorithm(array) {
  // Write your code here.
  let maxSum = array[0];
  let runningSum = 0;
  for (let i = 0; i < array.length; i++) {
    runningSum = runningSum + array[i];
    maxSum = Math.max(runningSum, maxSum);
    runningSum = Math.max(runningSum, 0);
  }
  return maxSum;
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;
