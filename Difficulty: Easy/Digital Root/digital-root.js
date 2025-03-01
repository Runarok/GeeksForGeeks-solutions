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
        console.log(obj.digitalRoot(n));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */
class Solution {

    // Function to compute the digital root of a number
    digitalRoot(num, sum = 0) {
        // Base case: If num is 0 or less, return sum if it's a single digit, otherwise compute the digital root recursively
        if (num <= 0) {
            return sum < 10 ? sum : this.digitalRoot(sum, 0);
        }

        // Add the last digit of num to sum
        sum = sum + (num % 10);

        // Remove the last digit from num
        num = Math.floor(num / 10);

        // Recursively call the function with the remaining digits
        return this.digitalRoot(num, sum);
    }
}
