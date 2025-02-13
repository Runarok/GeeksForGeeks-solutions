//{ Driver Code Starts
// Initial Template for JavaScript

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
        let inputArray = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.maxValue(inputArray));
    }
}

// } Driver Code Ends

class Solution {
    // Function to find the maximum value of |arr[i] + i - (arr[j] + j)|
    maxValue(arr) {
        const n = arr.length;  // Get the length of the array
    
        // Initialize variables to store max and min for both cases (arr[i] + i) and (arr[i] - i)
        let maxPlus = -Infinity;
        let minPlus = Infinity;
        let maxMinus = -Infinity;
        let minMinus = Infinity;
        
        // Iterate through the array to compute arr[i] + i and arr[i] - i
        for (let i = 0; i < n; i++) {
            const plus = arr[i] + i;  // arr[i] + i
            const minus = arr[i] - i;  // arr[i] - i
            
            // Update max and min for both cases
            maxPlus = Math.max(maxPlus, plus);
            minPlus = Math.min(minPlus, plus);
            maxMinus = Math.max(maxMinus, minus);
            minMinus = Math.min(minMinus, minus);
        }
        
        // Calculate and return the maximum difference between the four expressions
        return Math.max(maxPlus - minPlus, maxMinus - minMinus);
    }
}
