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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        obj.printArray(arr);

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - Array of numbers to be printed
 */
class Solution {
    printArray(arr) {
        // Initialize an empty string to store the formatted array elements
        let str = "";
        
        // Loop through each element in the array
        for (let i = 0; i < arr.length; i++) {
            // Append each element followed by a space to the string
            str = str + arr[i] + " ";
        }
        
        // Print the final string containing all elements of the array
        console.log(str);
    }
}
