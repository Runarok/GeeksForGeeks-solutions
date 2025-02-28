//{ Driver Code Starts
// Initial Template for javascript

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

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        console.log(obj.countPairs(arr, k));
        console.log('~');
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
class Solution {
    countPairs(arr, target) {
        // Initialize a map to store the frequency of elements
        const arrMap = new Map();
        let counter = 0;

        // Iterate over the array
        for (let i = 0; i < arr.length; i++) {
            // Calculate the complement needed to reach the target sum
            const complement = target - arr[i];

            // If the complement is already in the map, add its frequency to the counter
            if (arrMap.has(complement)) {
                counter += arrMap.get(complement);
            }
                
            // Update the frequency of the current element in the map
            arrMap.set(arr[i], (arrMap.get(arr[i]) || 0) + 1);
        }

        // Return the total count of pairs that sum to the target
        return counter;
    }
}
