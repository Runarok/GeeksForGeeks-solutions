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
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(Number);

        let obj = new Solution();

        let s = "";
        let ans = obj.sortByFreq(arr)
        for (let i = 0; i < ans.length; i++) {
            if (ans[i] == -0) ans[i] = 0;
            s += ans[i];
            s += " ";
        }
        console.log(s);

        console.log("~");
    }
}
// } Driver Code Ends



/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    // Function to sort the array according to the frequency of elements.
    sortByFreq(arr) {
        let frequencyMap = new Map();
        let n = arr.length;

        // Count the frequency of each element in the array
        for (let i = 0; i < n; i++) {
            frequencyMap.set(arr[i], (frequencyMap.get(arr[i]) || 0) + 1);
        }

        // Convert map to an array and sort based on frequency and value
        let sortedArray = Array.from(frequencyMap).sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0] - b[0]; // Sort by value if frequency is the same
            }
            return b[1] - a[1]; // Sort by frequency in descending order
        });

        let result = [];

        // Build the result array based on the sorted order
        for (let [key, value] of sortedArray) {
            for (let i = 0; i < value; i++) {
                result.push(key);
            }
        }

        return result;
    }
}
