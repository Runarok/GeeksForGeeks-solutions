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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        if (arr[i] == -0) arr[i] = 0;
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s = readLine();
        let obj = new Solution();
        let res = obj.myAtoi(s);
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @return {number}
 */

class Solution {
    // Function to convert a string to an integer
    myAtoi(s) {
        // Trim leading and trailing whitespaces
        s = s.trim();
        
        // If the string is empty, return 0
        if (!s) return 0;
        
        // Variable to store the sign of the number (1 for positive, -1 for negative)
        let sign = 1;
        
        // Check if the string starts with a minus sign
        if (s[0] === "-") {
            sign = -1;  // Set the sign to negative
            s = s.slice(1); // Remove the minus sign
        } else if (s[0] === "+") {
            s = s.slice(1); // Remove the plus sign if it exists
        }
        
        // Variable to store the resulting integer
        let result = 0;
        
        // Loop through each character in the string
        for (const char of s) {
            // If the character is not a digit, break out of the loop
            if (!/\d/.test(char)) break;
            
            // Convert the character to a number and add it to the result
            result = result * 10 + (char.charCodeAt(0) - "0".charCodeAt(0));
        }
        
        // Apply the sign to the result if any number was processed
        if (result !== 0) {
            result *= sign;
        }
        
        // Clamp the result to fit within the 32-bit signed integer range
        result = Math.max(Math.min(result, 2 ** 31 - 1), -(2 ** 31));
        
        // Return the final result
        return result;
    }
}
