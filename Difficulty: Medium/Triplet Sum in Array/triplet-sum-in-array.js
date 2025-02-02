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

function printList(arr) { console.log(arr.join(' ')); }

function main() {
    let t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.hasTripletSum(arr, k); // Use the correct function name
        console.log(res);
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {boolean}
 */

class Solution {
    // Function to find if there exists a triplet in the array arr[] which sums up to target
    hasTripletSum(arr, target) {
        // Iterate over the array to consider each element as the first element of the triplet
        for (let i = 0; i < arr.length; i++) {
            let seen = new Set();  // Create a set to store the elements encountered
            for (let j = i + 1; j < arr.length; j++) {
                // Calculate the required third element that would complete the triplet
                let required = target - arr[i] - arr[j];
                
                // If the required element is already in the set, return true
                if (seen.has(required)) {
                    return true;
                }
                
                // Add the current element to the set for future comparison
                seen.add(arr[j]);
            }
        }
        
        // If no triplet is found, return false
        return false;
    }
}
