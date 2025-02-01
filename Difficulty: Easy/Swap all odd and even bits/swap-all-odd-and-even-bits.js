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
        console.log(obj.swapBits(n));
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Number} n
 * @returns {Number}
*/

class Solution {
    // Function to swap odd and even bits.
    swapBits(n) {
        // Mask to extract even-positioned bits (0xAAAAAAAA).
        let evenBits = n & 0xAAAAAAAA;
        // Mask to extract odd-positioned bits (0x55555555).
        let oddBits = n & 0x55555555;
        
        // Right shift even bits by 1 to move them to odd positions.
        evenBits >>= 1;
        
        // Left shift odd bits by 1 to move them to even positions.
        oddBits <<= 1;
        
        // Combine the shifted even and odd bits using OR operation.
        return (evenBits | oddBits);
    }
}
