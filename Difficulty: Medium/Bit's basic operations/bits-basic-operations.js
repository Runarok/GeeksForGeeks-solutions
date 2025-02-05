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
    for(; i<t; i++)
    {
        let [n,m] = readLine().trim().split(" ").map((x) => parseInt(x));
        let [a,b] = readLine().trim().split(" ").map((x) => parseInt(x));
        let [c,d] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res1 = obj.XOR(n, m);
        let res2 = obj.check(a, b);
        let res3 = obj.setBit(c, d);
        console.log(res1, res2, res3);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for JavaScript
/**
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */

class Solution {
    // Function to perform XOR of two numbers.
    XOR(n, m) {
        // Return the result of XOR operation between n and m
        return n ^ m;
    }

    /**
     * @param {number} a
     * @param {number} b
     * @returns {boolean}
     */

    // Function to check if the a-th bit of b is 1 or 0.
    check(a, b) {
        // Shift b right by a-1 positions and check if the least significant bit is 1
        // Return 1 if true, otherwise return 0
        return ((b >> (a - 1)) & 1) === 1 ? 1 : 0; 
    }

    /**
     * @param {number[]} c
     * @param {number} d
     * @returns {number[]}
     */

    // Function to set the kth bit of c.
    setBit(c, d) {
        // Set the d-th bit of c by OR-ing c with 1 shifted left by d positions
        return (1 << c) | d;
    }
}
