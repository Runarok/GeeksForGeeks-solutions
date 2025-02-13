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
        let n = parseInt(readLine());
        let arr = new Array(n + 2);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n + 2; i++) arr[i] = input_ar1[i];
        let obj = new Solution();
        let ans = obj.twoRepeated(n, arr);
        console.log(ans[0] + " " + ans[1]);
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n - The range of numbers (1 to n)
 * @param {number[]} arr - The array containing n+2 elements with two repeated numbers
 * @returns {number[]} - An array containing the two repeated elements
 */

class Solution {
    // Function to find two repeated elements
    twoRepeated(n, arr) {
        let frequencyMap = {}; // Stores the frequency of each number
        let result = []; // Stores the two repeated numbers
    
        for (let num of arr) {
            if (frequencyMap[num]) {
                if (frequencyMap[num] === 1) {
                    result.push(num); // Store the number only once
                }
            }
            frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        }
    
        return result;
    }
}
