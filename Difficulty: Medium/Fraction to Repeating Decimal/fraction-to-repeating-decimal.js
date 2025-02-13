//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let a = parseInt(readLine());
        let b = parseInt(readLine());
        let obj = new Solution();
        let res = obj.calculateFraction(a, b);
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Number} a
 * @param {Number} b
 * @returns {string}
 */

class Solution {
    /**
     * Function to calculate the decimal representation of a fraction.
     * Handles repeating decimals by enclosing the repeating part in parentheses.
     * @param {Number} a - The numerator of the fraction
     * @param {Number} b - The denominator of the fraction
     * @returns {string} - The decimal representation of the fraction
     */
    calculateFraction(a, b) {
        if (b === 0) return "undefined"; // Handle division by zero
        if (a === 0) return "0";          // If numerator is 0, the result is 0

        let result = "";

        // Determine the sign of the result
        if ((a < 0) ^ (b < 0)) result += "-";

        // Work with absolute values of numerator and denominator
        a = Math.abs(a);
        b = Math.abs(b);

        // Add the integer part of the division
        result += Math.floor(a / b);
        let remainder = a % b;

        if (remainder === 0) return result; // If no remainder, return the result immediately

        result += "."; // Add decimal point to the result

        // Map to track remainders and their positions in the decimal part
        const remainderMap = new Map();

        while (remainder !== 0) {
            // If the remainder has been seen before, we have a repeating decimal
            if (remainderMap.has(remainder)) {
                const start = remainderMap.get(remainder);
                return `${result.slice(0, start)}(${result.slice(start)})`; // Add parentheses around the repeating part
            }

            // Store the position of the current remainder
            remainderMap.set(remainder, result.length);

            remainder *= 10; // Multiply the remainder by 10 for the next digit
            result += Math.floor(remainder / b); // Add the next digit to the result
            remainder %= b; // Update the remainder
        }

        return result;
    }
}
