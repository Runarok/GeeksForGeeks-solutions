//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine(), 10); // Read number of test cases
    for (let i = 0; i < t; i++) {
        const inputArr = readLine().split(' ').map(
            x => BigInt(x)); // Parse array of integers as BigInt
        const obj = new Solution();
        console.log(obj.sumDiff(inputArr).toString()); // Output the result as a string
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {BigInt}
 */

class Solution {
    sumDiff(arr) {
        const n = arr.length;
        let total = BigInt(0);
        let pow2 = BigInt(1); // 2^0

        // Loop through the array
        for (let i = 0; i < n; i++) {
            let contributionAsLast = pow2 * BigInt(arr[i]);
            let contributionAsFirst = pow2 * BigInt(arr[n - i - 1]);
            
            total += contributionAsLast - contributionAsFirst;
            
            pow2 *= BigInt(2); // Update 2^i for the next iteration
        }

        return total;
    }
}
