/*
function takes n*m array two dimentional (n == m)
need to return one dimenstional array of the array's elements in spiral order
spiral order => top left corner goes to right goes in spiral untill every element has been visted.
array = [
[1,2,3,4],
[12,13,14,5],
[11,16,15,6],
[10,9,8,7]
]
O/P: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] */

// O(N) time complexity | O(1) space complexity

function spiralTraverse(array) {
    // Write your code here.
      const result = [];
      let startRow = 0, 
              endRow = array.length-1;
      let startCol = 0, 
              endCol = array[0].length-1;
      
      while(startRow <= endRow && startCol <= endCol) {
          for(let col=startCol; col <= endCol; col++) {
              result.push(array[startRow][col])
          }
          for(let row=startRow+1; row <= endRow; row++) {
              result.push(array[row][endCol])
          }
          for(let col=endCol-1; col >= startCol; col--) {
              if(startRow === endRow) break
              result.push(array[endRow][col])
          }
          for(let row=endRow-1; row > startRow; row--) {
              if(startCol === endCol) break
              result.push(array[row][startCol])
          }
          
          startRow++;
          endRow--;
          startCol++;
          endCol--;
      }
      return result
  }
  
  // Do not edit the line below.
  exports.spiralTraverse = spiralTraverse;


  // 2nd solution with recursive function

  
  