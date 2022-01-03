// Taking non empty array of distinct integers, need to return array of integers which gives thier sum is equals target sum

function twoNumberSum(array, targetSum) {
  let obj = {};
  let sumArry = [];
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = i;
  }
  for (let j = 0; j < array.length; j++) {
    let b;
    b = targetSum - array[j];
    if (obj[b] > -1 && obj[b] !== j) {
      sumArry.push(array[j]);
    }
  }
  return sumArry;
}

// other solution

sumArry.push(array[j]);
