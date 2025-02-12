//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let x = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.closer(arr, n, x));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} x
 * @returns {number}
 */

class Solution {
    // Function to find index of element x in the array if it is present.
    closer(arr, n, x) {
        // Traverse through the array and check for the element
        for (let i = 0; i < n; i++) {
            // Check if the current element is equal to x
            if (arr[i] === x) {
                return i; // Return the index if element x is found
            }

            // Check the adjacent element if it exists
            if (i > 0 && arr[i - 1] === x) {
                return i - 1; // Return the index of previous element if it's equal to x
            }

            if (i < n - 1 && arr[i + 1] === x) {
                return i + 1; // Return the index of next element if it's equal to x
            }
        }

        // If the element x is not found in the array, return -1
        return -1;
    }
}
