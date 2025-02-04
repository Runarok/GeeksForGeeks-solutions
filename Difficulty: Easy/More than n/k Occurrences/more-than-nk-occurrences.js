//{ Driver Code Starts
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

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(Number);
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countOccurence(arr, x);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
    // Function to find the number of elements in the array that appear more than n/k times.
    countOccurence(arr, k) {
        // Calculate the threshold limit for an element's occurrence (more than n/k)
        const limit = Math.floor(arr.length / k);
        
        // Create an object to store the frequency of each element
        const frequencyMap = {};
        
        // Count the frequency of each element in the array
        for (const element of arr) {
            if (!frequencyMap[element]) {
                frequencyMap[element] = 1;  // Initialize count for the element
            } else {
                frequencyMap[element]++;    // Increment count for the element
            }
        }

        // Get an array of the frequency values
        const frequencies = Object.values(frequencyMap);
        
        // Count the number of elements whose frequency is greater than the limit
        let count = 0;
        for (const freq of frequencies) {
            if (freq > limit) {
                count++;  // Increment count if frequency exceeds the limit
            }
        }

        // Return the total count of elements meeting the condition
        return count;
    }
}
