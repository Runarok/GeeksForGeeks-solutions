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
        let a = parseInt(readLine());
        let b = parseInt(readLine());
        let obj = new Solution();
        obj.swap(a, b);

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {void}
 */

class Solution {
    // Function to swap two numbers and print the result.
    swap(a, b) {
        // Store the value of 'a' in a temporary variable
        let temp = a;

        // Assign the value of 'b' to 'a'
        a = b;

        // Assign the stored value of 'a' (from temp) to 'b'
        b = temp;

        // Print the swapped values
        console.log(a, b);
    }
}
