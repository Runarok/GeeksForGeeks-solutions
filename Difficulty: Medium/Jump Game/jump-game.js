//{ Driver Code Starts
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
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.canReach(arr);
        if (ans) {
            console.log("true");
        } else {
            console.log("false");
        }
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to check if we can reach the last index from the 0th index.
    canReach(arr) {
        let maxReach = 0;
        
        for (let i = 0; i < arr.length; i++) {
            // If we are at an index that's not reachable, return false
            if (i > maxReach) {
                return false;
            }
            
            // Update the maximum reachable index
            maxReach = Math.max(maxReach, i + arr[i]);
            
            // If we can reach the last index, return true
            if (maxReach >= arr.length - 1) {
                return true;
            }
        }
        
        return false;  // In case we can't reach the last index
    }
}
