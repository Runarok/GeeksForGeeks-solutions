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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.cost(arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    cost(arr) {
        // Get the length of the array
        let n = arr.length;
        
        // If the array has 1 or fewer elements, no cost can be calculated
        if (n <= 1) return 0;
        
        // Initialize min as the first element of the array
        let min = arr[0];
        
        // Loop through the array to find the minimum element
        for (let i = 1; i < n; i++) {
            if (arr[i] < min) {
                min = arr[i];  // Update min if a smaller element is found
            }
        }
        
        // Return the cost as the minimum element multiplied by (n-1)
        return min * (n - 1);
    }
}
