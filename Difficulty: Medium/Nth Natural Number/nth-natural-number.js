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
        let input = readLine().split(' ').map(x => parseInt(x));
        let N = input[0];
        let obj = new Solution();
        let res = obj.findNth(N);
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    findNth(n) {
        let result = 0;
        let placeValue = 1;
        
        // Process each base-9 digit
        while (n > 0) {
            let digit = n % 9;  // Get the least significant digit in base-9
            result += digit * placeValue;  // Add it to the result
            placeValue *= 10;  // Shift the place value for the next digit
            n = Math.floor(n / 9);  // Move to the next base-9 digit
        }
        
        return result;
    }
}

