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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.maxSum(arr);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    maxSum(arr) {
        let sum = 0; // Sum of all elements in the array
        let productSum = 0; // Initial sum of products (i * arr[i])
        
        // Calculate the sum of elements and the initial product sum
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            productSum += (arr[i] * i);
        }
        
        let maxSum = productSum; // Track the maximum sum
        
        // Iterate to find the maximum rotation sum
        for (let i = 1; i < arr.length; i++) {
            // Update productSum using the formula derived from rotation properties
            productSum = productSum + sum - (arr.length * arr[arr.length - i]);
            maxSum = Math.max(maxSum, productSum); // Update maxSum if needed
        }
        
        return maxSum;
    }
}
