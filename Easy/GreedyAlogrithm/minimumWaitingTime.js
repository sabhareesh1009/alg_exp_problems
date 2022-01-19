/* minimum waiting time need to find for the given queries where queries are positive 
integers non empty array; waiting is time required to start executing querie
ex: [3, 2, 1, 2, 6]
sol: 17 // minimum waiting time 
*/

// O(NlogN) time complexity | O(1) space complexity
function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let totalWaitingTime = 0;
  for (let i = 0; i < queries.length; i++) {
    const queriesLeft = queries.length - (i + 1);
    totalWaitingTime += queriesLeft * queries[i];
  }
  return totalWaitingTime;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
