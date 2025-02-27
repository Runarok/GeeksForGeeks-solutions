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
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.reversedBits(n);
        console.log(res);
    }
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} X
 * @return {number}
 */
class Solution {
    reversedBits(x) {
        // Convert the number to a 32-bit binary string.
        let binaryStr = x.toString(2).padStart(32, '0');
        
        // Reverse the binary string.
        let reversedStr = binaryStr.split('').reverse().join('');
        
        // Convert the reversed binary string back to decimal.
        let decimal = parseInt(reversedStr, 2);
        
        // Return the result.
        return decimal;
    }
}
