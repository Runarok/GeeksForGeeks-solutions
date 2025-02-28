//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let N = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.isPossible(N, arr);
        if (res === -0) res = 0;
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N - The length of the array
 * @param {number[]} arr - The array of numbers
 * @return {number} - Returns 1 if the sum of elements from either direction is divisible by 3, otherwise returns 0
 */

class Solution {
    // Function to check if the sum of elements in the array or its reverse is divisible by 3
    isPossible(N, arr) {
        // Initialize the sum of elements from the left side of the array
        let n1 = 0;
        
        // Calculate the sum of all elements in the array
        arr.forEach(element => {
            n1 += element;
        });

        // Initialize the sum of elements from the right side of the array (reversed array)
        let n2 = 0;

        // Calculate the sum of all elements in the reversed array
        arr.slice().reverse().forEach(element => {
            n2 += element;
        });

        // Check if the sum of elements from the left side (n1) is divisible by 3
        if (BigInt(n1) % 3n === 0n) return 1;

        // Check if the sum of elements from the right side (n2) is divisible by 3
        if (BigInt(n2) % 3n === 0n) return 1;

        // If neither sum is divisible by 3, return 0
        return 0;
    }
}
