//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(arr) { console.log(arr.join(' ')); }

function main() {
    let t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.findDuplicate(arr, k);
        console.log(res);
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to find the smallest number that appears exactly k times in the array
    findDuplicate(arr, k) {
        const frequencyMap = this.createFrequencyMap(arr);
        
        // Filtering numbers that appear exactly k times
        for (let key of Object.keys(frequencyMap)) {
            if (frequencyMap[key] !== k) {
                delete frequencyMap[key];
            }
        }

        // Finding the smallest number among the filtered keys
        const smallestNumber = Math.min(...Object.keys(frequencyMap));

        return smallestNumber && smallestNumber !== Infinity ? smallestNumber : -1;
    }

    // Helper function to create a frequency map of elements in the array
    createFrequencyMap(arr) {
        const freqMap = {};
        for (let num of arr) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }
        return freqMap;
    }
}
