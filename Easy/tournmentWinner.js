// tournment winner for
/*2 teams can compe each
1home 1away
1w 1loss
win 3 loss 0
[home, away]
results = [1,0,1...] (winners)
1=> home team won
0=> away team won
each team with all othere exactly once
tournament => two teams
winnersObj = {};
[["HTML", "C#" ], ['C#', 'python'], ['python', 'HTML']]
results = [0, 0, 1]
winner: python
 */

function tournamentWinner(competitions, results) {
  // Write your code here.
  let winners = {};
  let len = competitions.length;
  let compitionWinTeam = "";
  let maxPoints = 0;
  for (let i = 0; i < len; i++) {
    const winTeam = results[i];
    const team = winTeam === 1 ? competitions[i][0] : competitions[i][1];
    if (winners[team]) {
      winners[team] += 3;
      if (winners[team] > maxPoints) {
        compitionWinTeam = team;
        maxPoints = winners[team];
      }
    } else {
      winners[team] = 3;
      if (!compitionWinTeam) {
        compitionWinTeam = team;
        maxPoints = winners[team];
      }
    }
  }
  return compitionWinTeam;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
