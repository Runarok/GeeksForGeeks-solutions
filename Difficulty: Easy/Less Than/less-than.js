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
        let numbers = new Array(input_ar0.length);
        for (let i = 0; i < input_ar0.length; i++) numbers[i] = input_ar0[i];
        let k = parseInt(readLine());
        let obj = new Solution();
        let ans = obj.lessThan(numbers, k);
        let s = '';
        for (let i = 0; i < ans.length; i++) {
            if (ans[i] != -0)
                s += ans[i] + " ";
            else
                s += "0" +
                     " ";
        }
        console.log(s);

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - The input array of numbers
 * @param {number} k - The threshold value
 * @returns {number[]} - An array of numbers less than k
 */

class Solution {
    lessThan(arr, k) {
        let result = [];

        // Iterate through the array and add numbers that are less than k
        for (let num of arr) {
            if (num < k) {
                result.push(num);
            }
        }

        // Return the filtered array
        return result;
    }
}
