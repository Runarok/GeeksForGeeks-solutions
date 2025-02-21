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
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = input_line.length;

        let a = new Array(n);
        for (let i = 0; i < n; i++) {
            a[i] = parseInt(input_line[i]);
        }

        let obj = new Solution();
        let ans = obj.maxTripletSum(a, n);
        if (ans == -0) ans = 0;
        console.log(ans);
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
    // Function to find the maximum triplet sum in the array.
    maxTripletSum(arr) {
        // Sort the array in descending order
        arr.sort((a, b) => b - a);

        // Return the sum of the first three elements (the largest three elements)
        return arr[0] + arr[1] + arr[2];
    }
}
