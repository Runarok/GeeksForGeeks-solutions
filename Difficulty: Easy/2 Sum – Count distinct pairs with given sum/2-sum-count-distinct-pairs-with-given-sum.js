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
        console.log(obj.countDistinctPairs(arr, k));
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
    // Function to count distinct pairs with a given target sum
    countDistinctPairs(arr, target) {
        const seen = new Set(); // Set to track numbers we have seen
        const pairs = new Set(); // Set to store unique pairs
        
        for (let num of arr) {
            const comp = target - num; // Calculate the complement to form the target sum
            if (seen.has(comp)) {
                // Create a pair by ordering the numbers and adding to the set of pairs
                const pair = [Math.min(num, comp), Math.max(num, comp)];
                pairs.add(pair.toString()); // Convert pair to a string to ensure uniqueness
            }
            seen.add(num); // Add the current number to the 'seen' set
        }

        return pairs.size; // Return the number of distinct pairs
    }
}
