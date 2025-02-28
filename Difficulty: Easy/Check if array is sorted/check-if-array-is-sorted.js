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
    // Function to check if the array is sorted or not
    arraySortedOrNot(arr) {
        // Iterate through the array starting from the second element
        for (let i = 1; i < arr.length; i++) {
            // If any previous element is greater than the current one, the array is not sorted
            if (arr[i - 1] > arr[i]) {
                return false;
            }
        }
        // If no such condition is found, the array is sorted
        return true;
    }
}
