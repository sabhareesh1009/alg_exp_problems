/*smallest difference, finds pair of numbers whoose absolute difference 
is closestto zero.
-1 5 10 20 28 3
26 134 135 15 17
-1 3 5 10 20 28
15 17 26 134 135 */

// O(nlog(n) + mlog(m)) time complexity| O(1) space complexity

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let smallestDifference = Number.POSITIVE_INFINITY;
  let PrevIdxSmallestArray1 = 0;
  let PrevIdxSmallestArray2 = 0;
  let currentArrayOneIdx = 0;
  let currentArrayTwoIdx = 0;
  while (
    currentArrayOneIdx < arrayOne.length &&
    currentArrayTwoIdx < arrayTwo.length
  ) {
    const difference = Math.abs(
      arrayOne[currentArrayOneIdx] - arrayTwo[currentArrayTwoIdx]
    );
    if (difference < smallestDifference) {
      smallestDifference = difference;
      PrevIdxSmallestArray1 = currentArrayOneIdx;
      PrevIdxSmallestArray2 = currentArrayTwoIdx;
    }
    if (arrayOne[currentArrayOneIdx] < arrayTwo[currentArrayTwoIdx]) {
      currentArrayOneIdx++;
    } else {
      currentArrayTwoIdx++;
    }
  }
  return [arrayOne[PrevIdxSmallestArray1], arrayTwo[PrevIdxSmallestArray2]];
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;