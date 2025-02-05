//{ Driver Code Starts
// Main Template for JavaScript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let n = parseInt(readLine());
        let left = [];
        let right = [];

        // Check for left ants input
        let leftInput = readLine();
        if (leftInput && leftInput.trim() !== "") {
            left = leftInput.split(' ').map(Number);
        }

        // Check for right ants input
        let rightInput = readLine();
        if (rightInput && rightInput.trim() !== "") {
            right = rightInput.split(' ').map(Number);
        }

        let obj = new Solution();
        let result = obj.getLastMoment(n, left, right);
        console.log(result);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    getLastMoment(n, left, right) {
        let maxLeftTime = 0;
        let maxRightTime = 0;
        
        // Calculate the max time for ants moving left
        for (let i = 0; i < left.length; i++) {
            maxLeftTime = Math.max(maxLeftTime, left[i]);
        }
        
        // Calculate the max time for ants moving right
        for (let i = 0; i < right.length; i++) {
            maxRightTime = Math.max(maxRightTime, n - right[i]);
        }
        
        // The last moment is the maximum of both times
        return Math.max(maxLeftTime, maxRightTime);
    }
}
