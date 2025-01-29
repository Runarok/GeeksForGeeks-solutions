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
        let x = parseInt(readLine());
        let y = parseInt(readLine());

        let obj = new Solution();
        let res = obj.sameOccurrence(arr, x, y);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        tc--;
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */

class Solution {
    sameOccurrence(arr, x, y) {
        let n = arr.length;
        
        // Special case: If x == y, all subarrays are valid
        if (x === y) return (n * (n + 1)) / 2;

        let prefixCount = new Map();
        let count = 0, result = 0;

        // Initialize with prefix sum 0 appearing once
        prefixCount.set(0, 1);

        for (let num of arr) {
            if (num === x) count++;   // Increment count for x
            else if (num === y) count--; // Decrement count for y

            // If the current count has appeared before, add the number of times it appeared
            if (prefixCount.has(count)) {
                result += prefixCount.get(count);
            }

            // Update the frequency of the current count
            prefixCount.set(count, (prefixCount.get(count) || 0) + 1);
        }

        return result;
    }
}
