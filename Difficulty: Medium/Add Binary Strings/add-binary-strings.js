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
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let S1 = readLine();
        let S2 = readLine();
        let obj = new Solution();
        let res = obj.addBinary(S1, S2);

        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

class Solution {
    // Function to add two binary numbers represented as strings
    addBinary(s1, s2) {
        // Convert the binary strings to BigInt, add them, and then convert the result back to a binary string
        let sum = BigInt('0b' + s1) + BigInt('0b' + s2);
        
        // Return the result as a binary string
        return sum.toString(2);
    }
}
