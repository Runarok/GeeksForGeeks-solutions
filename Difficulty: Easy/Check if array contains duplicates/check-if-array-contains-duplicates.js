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
        let prices = new Array();
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < input_ar1.length; i++) prices.push(input_ar1[i]);
        let obj = new Solution();
        if (obj.checkDuplicates(prices))
            console.log("true");
        else
            console.log("false");
        console.log("~");
    }
}
// } Driver Code Ends

/**
 * @param {number[]} arr - An array of numbers
 * @returns {boolean} - Returns true if there are duplicate elements in the array, false otherwise
 */

class Solution {
    checkDuplicates(arr) {
        // Create a new Set to store unique elements from the array
        let newSet = new Set();

        // Loop through each element in the array
        for (let ele of arr) {
            // Check if the element already exists in the set (i.e., it's a duplicate)
            if (newSet.has(ele)) {
                // If duplicate is found, return true
                return true;
            } else {
                // Otherwise, add the element to the set to track unique values
                newSet.add(ele);
            }
        }

        // If no duplicates are found after checking all elements, return false
        return false;
    }
}
