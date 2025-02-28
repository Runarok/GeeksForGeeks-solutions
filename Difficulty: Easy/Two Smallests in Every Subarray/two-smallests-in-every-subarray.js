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
        let input_line = readLine().split(' ');
        let n = input_line.length;
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(parseInt(input_line[i]));
        }
        let obj = new Solution();
        let res = obj.pairWithMaxSum(arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
    // Function to pair with max sum in the array.
    pairWithMaxSum(data) {
        // Check if the array has more than one element
        let res;
        if (data.length > 1) {
            // Iterate through the array and add each element to its next element
            for (let i = 0; i < data.length - 1; i++) {
                data[i] += data[i + 1];
            }
            // Find the maximum sum from the modified array
            res = Math.max(...data);
        } else {
            // If the array has fewer than 2 elements, return -1
            res = -1;
        }

        // Return the maximum sum
        return res;
    }
}
