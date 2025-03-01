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
        console.log(obj.count(n));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n - The number for which we are calculating the result.
 * @returns {number} - Result based on formula 2^(n*(n-1)/2)
 */
class Solution
{
    /**
     * Function to calculate 2 raised to the power of n * (n-1) / 2.
     * This formula is often used in combinatorial problems involving edges between pairs of nodes.
     */
    count(n)
    {
        // Applying the mathematical formula directly
        return Math.pow(2, (n * (n - 1)) / 2);
    }
}
