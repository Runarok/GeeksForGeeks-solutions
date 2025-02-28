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
        let inputArr = readLine().split(' ').map(x=>parseInt(x));
        for(let j = 0;j<n;j++)
            arr[j] = inputArr[j];
        let obj = new Solution();
        console.log(obj.arrayOperations(n, arr));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to perform operations on array
    arrayOperations(n, arr) {
        let start = 0; // To track the start index of non-zero segments
        let end = 0; // To track the end index of non-zero segments
        let count = 0; // To count the number of non-zero segments
        
        // Loop through the array
        for (let i = 0; i < n; i++) {
            // When a non-zero element is found, start a segment
            if (arr[i] !== 0) {
                start = i;
                
                // Continue until the next zero or end of array
                while (arr[i + 1] !== 0 && i < n - 1) i++;
                end = i;
                
                // Increment the count of non-zero segments
                count++;
            }
        }
        
        // If there's only one segment and it ends at the last element, return -1
        if (count === 1 && end === n - 1) return -1;
        else return count; // Return the number of non-zero segments
    }
}
