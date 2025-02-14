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
        console.log(obj.sumOfDigits(n));
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/
class Solution {
      sumOfDigits(n) {
        // Base case: If n is a single digit, return it
        if (n === 0) {
            return 0;
        }
        
        // Recursive step: Add the last digit (n % 10) to the sum of digits of the remaining number (n // 10)
        return n % 10 + this.sumOfDigits(Math.floor(n / 10));
    }
}
