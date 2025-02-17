//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    inputString = inputString
        .trim()
        .split('\n')
        .map((string) => {
            return string.trim();
        });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let [n, k] = readLine()
            .trim()
            .split(' ')
            .map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.getCandidate(n, k);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to get the candidate number.
    getCandidate(n, k) {
        let num = 1;  // Initialize the candidate number
        while (true) {
            let temp = num * k;  // Calculate the next multiple of num and k
            if (temp > n) return num;  // If the result exceeds n, return num
            num = temp;  // Update num to the next multiple
        }
    }
}
