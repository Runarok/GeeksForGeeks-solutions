//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

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
    for (let i = 0; i < t; i++) {
        let k = parseInt(readLine().trim());
        let arr = readLine().trim().split(' ').map(Number);
        let obj = new Solution();
        let res = obj.topKFrequent(arr, k);
        printArray(res, res.length);
        // console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {Number[]} arr - Input array of numbers.
 * @param {Number} k - Number of top frequent elements to return.
 * @returns {Number[]} - Array containing the k most frequent elements in descending order.
 */
class Solution {
    topKFrequent(arr, k) {
        // Frequency map to store occurrences of each number
        let frequencyMap = {};

        // Count the frequency of each number in the array
        for (let num of arr) {
            frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        }

        // Convert the frequency map to an array of [number, frequency] pairs
        let frequencyArray = Object.entries(frequencyMap);

        // Sort the array first by frequency (descending), then by number value (descending)
        frequencyArray.sort((a, b) => b[1] - a[1] || b[0] - a[0]);

        // Extract the top k elements from the sorted array
        let result = [];
        for (let i = 0; i < k; i++) {
            result.push(Number(frequencyArray[i][0]));
        }

        return result;
    }
}
