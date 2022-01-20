// Vaildating the subsequence is present in the main array
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let arrIndx = 0;
  let seqIndx = 0;
  while (arrIndx < array.length && seqIndx < sequence.length) {
    if (array[arrIndx] === sequence[seqIndx]) {
      seqIndx += 1;
    }
    arrIndx += 1;
  }
  return seqIndx === sequence.length;
}
// Do not edit the line below.

// other solution
function isValidSubsequence(array, sequence) {
  // Write your code here.
  let seqIndx = 0;
  for (let i = 0; i < array.length; i++) {
    if (seqIndx === sequence.length) {
      break;
    }
    if (array[i] === sequence[seqIndx]) {
      seqIndx += 1;
    }
  }
  return seqIndx === sequence.length;
}
