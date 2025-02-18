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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.minimumLuckyNumber(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N
 * @returns {number}
 */

class Solution {
    // Function to find the minimum lucky number
    minimumLuckyNumber(N) {
        let a = 0, b = 0;
        let sum = N;

        // While sum is greater than 0, try to subtract either 4 or 7
        while (sum > 0) {
            // If the remaining sum is divisible by 7, subtract 7 and count it
            if (sum % 7 === 0) {
                b++;
                sum -= 7;
            } 
            // If divisible by 4, subtract 4 and count it
            else if (sum % 4 === 0) {
                a++;
                sum -= 4;
            }
            // If no exact divisibility by 4 or 7, subtract 4 (default)
            else {
                a++;
                sum -= 4;
            }
        }

        // If the sum of 4s and 7s exactly equals N, return the lucky number as a string
        // Otherwise, return -1 if it's not possible to form the lucky number
        return 4 * a + 7 * b === N ? "4".repeat(a) + "7".repeat(b) : -1;
    }
}
