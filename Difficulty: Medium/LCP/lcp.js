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
        let input_ar1 = readLine().split(' ');
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.LCP(arr, n));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
    // Function to find the longest common prefix in a list of strings.
    LCP(arr, n) {
        // Sort the array of strings
        arr.sort();

        // First and last string after sorting
        let first_str = arr[0];
        let second_str = arr[n - 1];

        // Initialize a variable to store the longest common prefix
        let lcp = '';

        // Compare characters of first and last string to find the common prefix
        for (let i = 0; i < second_str.length; i++) {
            if (first_str[i] === second_str[i]) {
                lcp = lcp + first_str[i];
            } else {
                break;
            }
        }

        // If a common prefix is found, return it; otherwise, return -1
        return lcp ? lcp : -1;
    }
}
