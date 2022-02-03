/*
finding the length of the longest peak for the given array
ex: [1,2,3,3,4,0,10,6,5,-1,3,2,3]
o/p: 6
 */

function longestPeak(array) {
    // Write your code here
      let longestPeakLength = 0;
      let i = 1;
      while(i < array.length-1) {
          const isPeak = array[i-1] < array[i] && array[i] > array[i+1] ? true : false;
          if(!isPeak) {
              i+=1;
              continue;
          }
          let leftIdx = i-2;
          while(leftIdx >=0 && array[leftIdx] < array[leftIdx+1]) {
              leftIdx--;
          }
          let rightIdx = i+2;
          while(rightIdx < array.length && array[rightIdx] < array[rightIdx-1]) {
              rightIdx++;
          }
          i = rightIdx;
          const currentPeakLength = rightIdx - leftIdx - 1;
          longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
      }
      return longestPeakLength;
  }
  
  // Do not edit the line below.
  exports.longestPeak = longestPeak;
  