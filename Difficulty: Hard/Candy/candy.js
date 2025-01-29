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
        let a = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.minCandy(a);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find minimum number of candies to be distributed among the students.
    minCandy(arr) {
        let n = arr.length;
        let candies_L_To_R = new Array(n).fill(1);
        let candies_R_To_L = new Array(n).fill(1);
        
        // Traverse left to right
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] < arr[i]) {
                candies_L_To_R[i] = candies_L_To_R[i - 1] + 1;
            }
        }
        
        // Traverse right to left
        for (let i = n - 2; i >= 0; i--) {
            if (arr[i] > arr[i + 1]) {
                candies_R_To_L[i] = candies_R_To_L[i + 1] + 1;
            }
        }

        let totalCandies = 0;
        
        // Combine results from both directions
        for (let i = 0; i < n; i++) {
            totalCandies += Math.max(candies_L_To_R[i], candies_R_To_L[i]);
        }

        return totalCandies;
    }
}
