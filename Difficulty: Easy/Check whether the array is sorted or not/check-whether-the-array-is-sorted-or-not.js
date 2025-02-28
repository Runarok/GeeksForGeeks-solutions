//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(str => str.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine().trim());
    for (let i = 0; i < t; i++) {
        let arr = readLine().trim().split(" ").map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.arraySortedOrNot(arr);
        console.log(res ? "true" : "false");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to check if the array is sorted in non-decreasing order
    arraySortedOrNot(arr) {
        // Iterate through the array starting from the second element
        for (let i = 1; i < arr.length; i++) {
            // If the current element is smaller than the previous one, the array is not sorted
            if (arr[i] < arr[i - 1]) {
                return false;
            }
        }
        
        // If no violations were found, return true indicating the array is sorted
        return true;
    }
}
