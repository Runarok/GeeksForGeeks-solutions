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
        let str = readLine().trim();
        let obj = new Solution();
        let res=obj.xmod11(str);
        console.log(res);   
        
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} x
 * @returns {boolean}
 */
class Solution {
    xmod11(x) {
        // Convert the input number to BigInt to handle large numbers safely.
        // Perform modulo operation with 11 and return the result as a number.
        return Number(BigInt(x) % BigInt(11));
    }
}
