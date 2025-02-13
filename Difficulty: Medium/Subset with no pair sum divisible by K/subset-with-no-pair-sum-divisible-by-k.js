//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.subsetPairNotDivisibleByK(arr, k);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to find the largest subset where no pair is divisible by k.
    subsetPairNotDivisibleByK(arr, k) {
        // Create an array to store the frequency of remainders when dividing by k.
        const remCount = new Array(k).fill(0);
        
        // Count the occurrences of each remainder (num % k) in the array.
        for (let num of arr) remCount[num % k]++;
        
        // Initialize the result by considering at most one element with remainder 0.
        let maxSubset = Math.min(remCount[0], 1);
        
        // Loop through all possible pairs of remainders and select the maximum count.
        for (let i = 1; i <= Math.floor(k / 2); i++) {
            if (i === k - i) {
                // If the remainder is exactly half of k, select at most one element.
                maxSubset += Math.min(remCount[i], 1);
            } else {
                // Otherwise, select the maximum between the remainder and its complement.
                maxSubset += Math.max(remCount[i], remCount[k - i]);
            }
        }
        
        return maxSubset;
    }
}
