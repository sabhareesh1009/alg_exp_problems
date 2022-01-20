/* 
array => coins
return min sum of money cannot create
ex: coins = [1,2,5]
cannot create is 4
no coins min sum cannot create 1. */

function nonConstructibleChange(coins) {
    coins.sort((a,b) => a-b);
       let currentChangeCreated = 0;
       for (const coin of coins) {
           if (coin > currentChangeCreated + 1 ) 
               return currentChangeCreated + 1
           currentChangeCreated += coin
       }
     return currentChangeCreated + 1;
   }
   // Do not edit the line below.
   exports.nonConstructibleChange = nonConstructibleChange;
   