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
        let res = obj.isNarcissistic(N);
        console.log(res?1:0);
    
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
    // Function to check whether the given number is narcissistic or not.
    isNarcissistic(N) {
        // Get the number of digits in N
        const numDigits = N.toString().length;
        let temp = N;
        let sum = 0;

        // Calculate the sum of each digit raised to the power of numDigits
        while (temp > 0) {
            let digit = temp % 10;
            sum += digit ** numDigits;
            temp = Math.floor(temp / 10);
        }

        // Check if the sum equals the original number
        return sum === N ? 1 : 0;
    }
}
