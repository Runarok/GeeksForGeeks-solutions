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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.find(N);
        if (res === -0) res = 0;
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number} N - The input number
 * @return {number} - Returns N incremented by 1
 */
class Solution {
    find(N) {
        return N + 1; // Increment N by 1 and return
    }
}
