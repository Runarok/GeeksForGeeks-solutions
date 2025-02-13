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
        let k = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.kthDiff(arr, n, k));
        
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} a
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution
{
    // Function to find kth difference.
    kthDiff(a, n, k)
    {
        // Initialize an array to store all the absolute differences
        let diffArr = [];
        let absDiff;
        
        // Loop through all pairs of elements in the array
        for(let i = 0; i < n; i++) {
            for(let j = i + 1; j < n; j++) {
                // Calculate the absolute difference between the two elements
                absDiff = Math.abs(a[i] - a[j]);
                // Push the absolute difference to the diffArr
                diffArr.push(absDiff);
            }
        }

        // Sort the differences in ascending order
        diffArr.sort((a, b) => a - b);

        // Return the kth smallest difference (k-1 index due to zero-based indexing)
        return diffArr[k - 1];
    }
}
