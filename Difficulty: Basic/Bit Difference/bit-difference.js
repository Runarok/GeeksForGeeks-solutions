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
    for(;i<t;i++)
    {
        let input_line = readLine().split(' ').map(x=>parseInt(x));
        let a = input_line[0];
        let b = input_line[1];
        let obj = new Solution();
        console.log(obj.countBitsFlip(a, b))
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */

// Function to find the number of bits needed to be flipped to convert A to B
class Solution {
    
    countBitsFlip(a, b) {
        // XOR the two numbers 'a' and 'b'. 
        // This operation will highlight the differing bits between the two numbers (1 for each differing bit).
        let xor = a ^ b;
        let count = 0;
        
        // Count the number of 1's in the XOR result, which corresponds to the number of bits that need to be flipped.
        while (xor > 0) {
            count += xor & 1;  // Check if the least significant bit is 1
            xor = xor >> 1;    // Right shift to check the next bit
        }
        
        return count;
    }
}
