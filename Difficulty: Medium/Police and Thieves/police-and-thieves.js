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
        let N = input_ar0[0];
        let K = input_ar0[1];
        let arr = new Array(N);
        let input_ar1 = readLine().split(' ');
        for(let i=0;i<N;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.catchThieves(arr, N, K);
        console.log(res);
        
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
*/

class Solution {
    
    catchThieves(arr, N, K) {
        // Arrays to hold the indices of police ('P') and thieves ('T')
        let policeIndices = [];
        let thiefIndices = [];
        
        // Loop through the array to collect the indices of police and thieves
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'P') {
                policeIndices.push(i);  // Store police index
            } else if (arr[i] === 'T') {
                thiefIndices.push(i);  // Store thief index
            }
        }

        let policeIndex = 0;  // Pointer for police indices
        let thiefIndex = 0;   // Pointer for thief indices
        let count = 0;        // Counter for the number of thieves caught

        // Try to match police and thieves based on their distance
        while (policeIndex < policeIndices.length && thiefIndex < thiefIndices.length) {
            // If a police can catch a thief within the distance K
            if (Math.abs(policeIndices[policeIndex] - thiefIndices[thiefIndex]) <= K) {
                count++;  // One thief is caught
                policeIndex++;  // Move to the next police
                thiefIndex++;   // Move to the next thief
            } 
            // If current police is far behind the current thief, move to the next police
            else if (policeIndices[policeIndex] < thiefIndices[thiefIndex]) {
                policeIndex++;
            } 
            // Otherwise, move to the next thief
            else {
                thiefIndex++;
            }
        }

        return count;  // Return the total number of thieves caught
    }
}
