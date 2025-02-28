//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.addOne(input_ar1).join(' '));
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    // Function to add one to the number represented by the array
    addOne(arr) {
        // Initialize carry to 1, as we need to add one
        let carry = 1;
        let n = arr.length;

        // Iterate through the array starting from the last element (right to left)
        for (let i = n - 1; i > -1; i--) {
            // If the sum of the current digit and carry exceeds 9, reset to 0 and keep carry as 1
            if (arr[i] + carry > 9) {
                carry = 1;
                arr[i] = 0;
            } 
            // Otherwise, simply add the carry and reset carry to 0
            else {
                arr[i] += carry;
                carry = 0;
            }
        }

        // If carry is still 1, insert it at the beginning of the array
        if (carry) {
            arr.unshift(1);
        }

        // Return the updated array
        return arr;
    }
}
