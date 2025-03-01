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
        let res = obj.minOperation(n);
        if(res === -0)
            res = 0;
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n - The target number we want to reduce to zero.
 * @return {number} - The minimum number of operations required.
*/

class Solution {
    
    // Function to calculate the minimum number of operations to reduce n to 0.
    minOperation(n) {
        // Initialize operation counter
        let operationCount = 0;

        // Loop until n reduces to zero
        while (n > 0) {
            // If n is even, divide it by 2
            if (n % 2 === 0) {
                n /= 2;
            } 
            // If n is odd, subtract 1
            else {
                n -= 1;
            }
            // Increment operation counter after each step
            operationCount++;
        }

        // Return the total number of operations performed
        return operationCount;
    }
}
