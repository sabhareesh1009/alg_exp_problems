



// To return the squares of array in same ascending order by taking non empty array with integers
function sortedSquaredArray(array) {
    // Write your code here.
      let smallest_indx = 0;
      let greatest_indx = array.length - 1;
      let sortedSquaresArray = new Array(array.length).fill(0);
      for	(let i = array.length-1; i >= 0; i--) {
          let smallestValue = Math.abs(array[smallest_indx]);
          let greatestValue = Math.abs(array[greatest_indx]);
          if	(smallestValue > greatestValue) {
              sortedSquaresArray[i] = smallestValue * smallestValue;
              smallest_indx++;
          } else {
              sortedSquaresArray[i] = greatestValue * greatestValue;
              greatest_indx--;
          }
      }
    return sortedSquaresArray;
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;
  