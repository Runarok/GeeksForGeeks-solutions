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

        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.findElements(arr);
        let s = "";
        if (res) {
            for (let it of res) {
                s += it + " ";
            }
        }
        console.log(s);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - Array of numbers to be processed
 * @return {number[]} - A new array excluding the two largest elements
 */

class Solution {
    findElements(arr) {
        // Sort the array in ascending order
        var sortedArray = arr.sort((a, b) => a - b);
        
        // Get the length of the sorted array
        var arrayLength = arr.length;
        
        // Return a new array excluding the two largest elements
        return sortedArray.slice(0, arrayLength - 2);
    }
}
