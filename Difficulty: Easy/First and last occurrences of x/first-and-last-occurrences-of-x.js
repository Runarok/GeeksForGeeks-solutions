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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {

    let i = 0;
    let t = parseInt(readLine());
    for (; i < t; i++) {

        let x = parseInt(readLine());

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.firstAndLast(x, arr);
        printArray(res, res.length);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} X
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {

    firstAndLast(x, arr) {
        // Find the first and last occurrence of x in the array
        let start = arr.indexOf(x);
        let end = arr.lastIndexOf(x);
        
        // If x is not found, return [-1], otherwise return the indices
        return start == -1 ? [-1] : [start, end];
    }
}
