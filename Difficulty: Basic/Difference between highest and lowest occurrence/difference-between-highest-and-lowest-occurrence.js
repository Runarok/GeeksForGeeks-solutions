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
        let input_ar0 = readLine().split(' ').map(x => parseInt(x));
        let a = [];
        for (let i = 0; i < input_ar0.length; i++) a.push(input_ar0[i]);
        let obj = new Solution();
        console.log(obj.findDiff(a));
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the difference between the highest and lowest frequency of elements in the array.
    findDiff(arr) {
        let frequencyMap = new Map();

        // Count occurrences of each element in the array
        for (let num of arr) {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        }

        let maxFrequency = -Infinity, minFrequency = Infinity;

        // Determine the highest and lowest frequency in the map
        for (let count of frequencyMap.values()) {
            maxFrequency = Math.max(maxFrequency, count);
            minFrequency = Math.min(minFrequency, count);
        }

        // Return the difference between the highest and lowest frequency
        return maxFrequency - minFrequency;
    }
}
