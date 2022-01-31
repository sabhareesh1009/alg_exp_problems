/**
 * Moving the element to end
array of integers and integer; 
function to move all instances of that integer to end of the array.
array = [2,1,2,2,2,3,4,2]
to move = 2
O/P: [1,3,4,2,2,2,2,2]
 */
// O(N) time complexity | O(1) space complexity
function moveElementToEnd(array, toMove) {
    // Write your code here.
      let i = 0;
      let j = array.length-1;
      while(i < j) {
          if(array[i] === toMove && array[j] !== toMove) {
              array[i] = array[j];
              array[j] = toMove;
              i++;
              j--;
          } else if(array[i] === toMove  && array[j] === toMove) {
              j--
          } else if(array[i] !== toMove  && array[j] === toMove) {
              i++;
              j--;
          } else {
              i++
          }
      }
      return array;
  }
  
  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;
  
