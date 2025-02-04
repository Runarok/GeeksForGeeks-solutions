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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = [];
        for (let j = 0; j < n; j++) {
            let row = new Array(n);
            let input_ar1 = readLine().split(' ').map(x => parseInt(x));
            for (let k = 0; k < n; k++) {
                row[k] = input_ar1[k];
            }
            arr.push(row);
        }
        let obj = new Solution();
        let res = obj.minPathSum(arr);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number} n
 * @param {number[][]} triangle
 * @returns {number}
 */

class Solution {
    // Function to minimize the sum of the array
    minPathSum(triangle) {
        let n = triangle.length;

        // Start from the second last row and move upwards
        for (let row = n - 2; row >= 0; row--) {
            for (let col = 0; col <= row; col++) {
                // Update the current element to be the sum of itself and the minimum of the two adjacent elements below
                triangle[row][col] += Math.min(triangle[row + 1][col], triangle[row + 1][col + 1]);
            }
        }

        // The top element now contains the minimum path sum
        return triangle[0][0];
    }
}
