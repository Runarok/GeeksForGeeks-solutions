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
        let res = obj.firstElement(arr, k);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        tc--;
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr - The input array.
 * @param {number} k - The target frequency.
 * @returns {number} - The first element in the array that appears exactly k times, or -1 if not found.
 */

class Solution {
    // Function to find the first element in the array that appears exactly k times.
    firstElement(arr, k) {
        // Object to store the frequency of each element in the array
        let counts = {};

        // Count the frequency of each element in the array
        for (let num of arr) {
            counts[num] = (counts[num] || 0) + 1;
        }

        // Iterate through the array to find the first element with the desired frequency
        for (let num of arr) {
            if (counts[num] === k) {
                return num; // Return the element if it appears exactly k times
            }
        }

        // Return -1 if no element is found that appears exactly k times
        return -1;
    }
}
    