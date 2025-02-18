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
        let [n1,n2] = readLine().trim().split(" ").map((x) => parseInt(x));
        let arr1 = readLine().trim().split(" ").map((x) => parseInt(x));
        let arr2 = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.commonSum(n1,n2,arr1,arr2);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n1
 * @param {number} n2
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number}
 */

class Solution {
    // Function to find the sum of elements common in two arrays.
    commonSum(n1, n2, arr1, arr2) {
        const MOD = 1000000007; // Define modulus for large sum

        // Convert arrays to sets for faster lookup
        const set_a = new Set(arr1);
        const set_b = new Set(arr2);
        
        // Find common elements by filtering elements of set_b that are also in set_a
        const commonElements = [...set_b].filter(num => set_a.has(num));
        
        // Calculate the sum of common elements, applying the modulus to avoid overflow
        const sumElements = commonElements.reduce((acc, curr) => (acc + curr) % MOD, 0);
        
        return sumElements; // Return the sum of common elements
    }
}
