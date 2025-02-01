//{ Driver Code Starts
// Initial Template for JavaScript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

// Driver Code
function main() {
    let t = parseInt(readLine()); // Number of test cases
    for (let i = 0; i < t; i++) {
        let n = parseInt(readLine()); // Input number
        let obj = new Solution();
        let res = obj.isPalindrome(n);
        console.log(res ? "true" : "false");
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @returns {boolean}
 */

class Solution {
    // Function to check if a number is a palindrome
    isPalindrome(n) {
        let res = 0;  // Variable to store the reversed number
        let temp = n;  // Copy of the original number
        
        // Reverse the number
        while (temp > 0) {
            res = res * 10 + (temp % 10);  // Add the last digit to res
            temp = parseInt(temp / 10);  // Remove the last digit from temp
        }
        
        // Check if the reversed number is equal to the original number
        return res === n;
    }
}
