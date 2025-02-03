//{ Driver Code Starts
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
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let obj = new Solution();
        console.log(obj.longestSubarray(arr));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript
class Solution {
    // Function to find the longest subarray with non-negative numbers
    longestSubarray(arr) {
        let maxLength = 0;  // Variable to store the maximum length of the subarray
        let currentLength = 0;  // Variable to store the length of the current valid subarray

        // Iterate through the array
        for (let num of arr) {
            // If the number is non-negative, increase the current subarray length
            if (num >= 0) {
                currentLength++;  
                maxLength = Math.max(maxLength, currentLength);  // Update the maximum length if needed
            } else {
                // If a negative number is encountered, reset the current subarray length
                currentLength = 0;
            }
        }
        // Return the maximum length of the subarray found
        return maxLength;
    }
}
