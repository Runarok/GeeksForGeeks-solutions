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
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));

        let obj = new Solution();
        console.log(obj.transitionPoint(arr));
        console.log("~");
    }
} // } Driver Code Ends
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    transitionPoint(arr) {
        // Handle the case where the first element is 1
        if (arr[0] === 1) {
            return 0;
        }

        // Loop through the array to find the first occurrence of 1
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 1) {
                return i;
            }
        }

        // If no transition point (no 1 found), return -1
        return -1;
    }
}
