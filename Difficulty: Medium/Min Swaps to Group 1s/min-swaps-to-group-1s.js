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
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let inputArray = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.minSwaps(inputArray));
    }
}

// } Driver Code Ends

class Solution {
    minSwaps(arr) {
        let n = arr.length;
        
        // Count the total number of 1s in the array
        let totalOnes = arr.filter(num => num === 1).length;
        
        // If there are no 1s in the array, return -1
        if (totalOnes === 0) {
            return -1;
        }
        
        // Find the minimum swaps required to group all 1s
        // Initial window of size `totalOnes`
        let windowOnes = 0;
        for (let i = 0; i < totalOnes; i++) {
            windowOnes += arr[i];
        }
        
        let maxOnesInWindow = windowOnes;
        
        // Slide the window across the array
        for (let i = totalOnes; i < n; i++) {
            windowOnes += arr[i] - arr[i - totalOnes];
            maxOnesInWindow = Math.max(maxOnesInWindow, windowOnes);
        }
        
        // Minimum swaps needed are the number of 1s we have to move
        return totalOnes - maxOnesInWindow;
    }
}
