//{ Driver Code Starts
// Initial Template for javascript
'use strict';

// Position this line where user code will be pasted.
const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];
rl.on('line', (line) => { input.push(line); });

rl.on('close', () => {
    let t = parseInt(input[0].trim());
    let index = 1;

    while (t-- > 0) {
        let arr = input[index].trim().split(" ").map(Number);
        index++;
        let target = parseInt(input[index].trim());
        index++;

        let obj = new Solution();
        let res = obj.countPairs(arr, target);
        console.log(res);
        console.log("~");
    }
});

// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number[]} arr - Input array of integers
 * @param {number} target - Target sum for pair count
 * @return {number} - Count of pairs that sum up to the target
 */

class Solution {
    countPairs(arr, target) {
        let frequency = new Map(); // Map to store frequency of numbers
        let count = 0; // Counter for valid pairs

        // Iterate through each number in the array
        for (let i = 0; i < arr.length; i++) {
            let remaining = target - arr[i]; // Find the complement that would form the target sum

            // If the complement exists in the map, add its count to the pair count
            if (frequency.has(remaining)) {
                count += frequency.get(remaining);
            }

            // Update frequency map for the current number
            frequency.set(arr[i], (frequency.get(arr[i]) || 0) + 1);
        }

        return count;
    }
}
