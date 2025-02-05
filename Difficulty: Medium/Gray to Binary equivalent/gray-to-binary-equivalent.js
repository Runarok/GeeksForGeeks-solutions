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
        let n = input_line[0];
        let obj = new Solution();
        console.log(obj.grayToBinary(n))
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {Number} n
 * @returns {Number}
 */

class Solution {
    // Function to convert a given Gray code equivalent to Binary equivalent.
    grayToBinary(n) {
        // Start with the given Gray code as the initial binary value
        let binary = n; 

        // Loop to iteratively calculate the binary equivalent
        while (n > 0) {
            // Right shift the Gray code by 1 bit
            n = n >> 1;     
            
            // XOR the current Gray code value with the shifted value to get the binary equivalent
            binary = binary ^ n; 
        }

        // Return the binary equivalent
        return binary;
    }
}
