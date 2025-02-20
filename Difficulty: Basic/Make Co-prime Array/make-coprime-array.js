//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ').map(Number);
        let obj = new Solution();
        let ans = obj.countCoPrime(input_line);
        console.log(ans);
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - Input array of numbers
 * @returns {number} - Count of insertions needed to make all adjacent elements coprime
 */

class Solution {
    
    // Function to compute the Greatest Common Divisor (GCD) of two numbers
    gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    // Function to count the number of insertions required to make all adjacent elements coprime
    countCoPrime(arr) {
        let insertions = 0;

        // Iterate through the array and check adjacent elements
        for (let i = 0; i < arr.length - 1; i++) {
            if (this.gcd(arr[i], arr[i + 1]) !== 1) {
                insertions++; // Increment count if elements are not coprime
            }
        }

        return insertions;
    }
}
