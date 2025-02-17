//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.computeParity(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N - The input number to check for parity.
 * @return {string} - Returns "even" if the sum of bits is even, "odd" otherwise.
 */
class Solution {
    computeParity(N) {
        // Create an array to hold the binary digits
        let bits = [];
        
        // Convert the number to binary and store the bits
        for (; N > 0; ) {
            bits.push(N % 2);
            N = Math.floor(N / 2);  // Reduce N by dividing it by 2
        }

        // Compute the sum of the binary digits and check if the sum is even or odd
        return bits.reduce((a, b) => a + b) % 2 === 0 ? "even" : "odd";
    }
}
