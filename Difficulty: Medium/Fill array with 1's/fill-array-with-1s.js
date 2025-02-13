//{ Driver Code Starts
// Initial Template for javascript

// Initial Template for javascript

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

        let input_line = readLine().split(' ');
        let arr_length = input_line.length;
        let arr = new Array(arr_length);
        for (let i = 0; i < arr_length; i++) {
            arr[i] = parseInt(input_line[i]);
        }

        let obj = new Solution();
        let ans = obj.minMoves(arr);
        if (ans == -0) ans = 0;
        console.log(ans.toString());
        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    // Function to find minimum number of moves to make all elements equal.
    minMoves(arr) {
        // If the array is empty, return -1 as no moves can be made.
        if (arr.length == 0)
            return -1;

        let max = 0, min = Infinity;
        
        // Find the maximum and minimum values in the array
        for (let i = 0; i < arr.length; i++) {
            max = Math.max(max, arr[i]);
            min = Math.min(min, arr[i]);
        }

        // If max is 0, return -1 because no move is needed
        if (max == 0) {
            return -1;
        }

        // If the minimum is already 1, no moves are required
        if (min == 1) {
            return 0;
        }

        let prev = 0;
        let ans = new Array(arr.length);

        // First pass to fill array from left to right
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 1) {
                ans[i] = arr[i]; // Marking 1s as 1
                prev = 1;         // Tracking the last 1 encountered
            } else {
                // If we've encountered a 1 before, update current element
                if (prev >= 1) {
                    ans[i] = prev;
                    prev += 1;    // Increment the previous value
                } else {
                    ans[i] = arr[i]; // Keeping the current element unchanged
                }
            }
        }

        // Second pass to fill array from right to left
        prev = 0;
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == 1) {
                prev = 1;    // Track the last 1 encountered
            } else {
                // If we've encountered a 1 before, update current element
                if (prev >= 1) {
                    ans[i] = ans[i] == 0 ? prev : Math.min(prev, ans[i]);
                    prev += 1;    // Increment the previous value
                }
            }
        }

        // Find the maximum value from the array ans[]
        let maxMoves = 0;
        for (let i = 0; i < ans.length; i++) {
            maxMoves = Math.max(maxMoves, ans[i]);
        }

        return maxMoves; // Return the maximum number of moves required
    }
}
