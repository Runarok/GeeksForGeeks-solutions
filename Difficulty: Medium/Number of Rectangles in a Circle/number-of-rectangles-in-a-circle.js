//{ Driver Code Starts
// Initial Template for javascript

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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.rectanglesInCircle(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function template for JavaScript
/**
 * @param {number} R - The radius of the circle.
 * @returns {number} - The number of rectangles that can be circumscribed in the circle.
 */

class Solution {
    // Function to count the number of rectangles that can be circumscribed in a circle.
    rectanglesInCircle(r) {
        let count = 0;  // Initialize the count of rectangles
        const limit = 2 * r;  // The maximum possible dimension of the rectangle

        // Loop through possible side lengths of the rectangle (a and b)
        for (let a = 1; a <= limit; a++) {
            for (let b = 1; b <= limit; b++) {
                // Check if the rectangle can be inscribed in the circle
                if ((a * a + b * b) <= (4 * r * r)) {
                    count++;  // Increment the count if valid
                }
            }
        }

        return count;  // Return the total count of valid rectangles
    }
}
