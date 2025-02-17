//{ Driver Code Starts
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
    for(;i<t;i++)
    {
        let n = BigInt(readLine());
        let obj = new Solution();
        let res = obj.invertBits(n);
        console.log(res.toString());
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} bin - The binary number to be processed
 * @returns {number} - The number obtained after inverting the bits
 */

class Solution {
    // Function to invert the bits of a given number
    invertBits(bin) {
        // Convert the number to a 32-bit binary string with leading zeros
        const binaryString = bin.toString(2).padStart(32, "0");
        
        // Initialize an empty string to store the inverted bits
        let invertedBits = "";
        
        // Loop through each bit in the binary string and invert it
        for (const bit of binaryString) {
            invertedBits += bit === "1" ? "0" : "1";
        }
        
        // Convert the inverted binary string back to a decimal number and return it
        return parseInt(invertedBits, 2);
    }
}
