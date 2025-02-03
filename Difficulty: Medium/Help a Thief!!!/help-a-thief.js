//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let T = input_ar0[0];
        let N = input_ar0[1];
        let A = new Array(N);
        let B = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            A[i] = input_ar1[i];
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            B[i] = input_ar2[i];
        let obj = new Solution();
        let res = obj.maxCoins(A,B,T,N);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} A
 * @param {number} B
 * @param {number} T
 * @param {number} N
 * @returns {number}
*/

class Solution {
    maxCoins(A, B, T, N) {
      // Create an array of plates with their coins and available counts
      const plates = [];
    
      for (let i = 0; i < N; i++) {
          plates.push({ coinsPerPlate: B[i], availablePlates: A[i] });
      }

      // Sort the plates based on coins per plate in descending order
      plates.sort((a, b) => b.coinsPerPlate - a.coinsPerPlate);
      
      let totalCoins = 0;

      // Go through the sorted plates and take as many as possible
      for (const plate of plates) {
          if (T <= 0) break; // Exit if no plates can be taken
        
          // Determine how many plates to take (whichever is smaller, available or remaining)
          const platesToTake = Math.min(plate.availablePlates, T);
          totalCoins += platesToTake * plate.coinsPerPlate; // Add the coins to the total
          T -= platesToTake; // Reduce the number of plates to be taken
      }

      // Return the total coins collected
      return totalCoins;
    }
}
