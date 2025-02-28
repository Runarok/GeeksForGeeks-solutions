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
        let obj = new Solution();
        obj.convert(arr, n);
        let s = '';
        for(let i=0;i<n;i++)
        {
            s+=arr[i];
            s+=' ';
        }
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    // Function to convert elements to their ranks in sorted order
    convert(arr, n) {
        // Create a sorted copy of the original array
        let sortedArr = [...arr].sort((a, b) => a - b);

        // Create a map to store the rank of each element
        let rankMap = new Map();

        // Assign ranks to the sorted elements
        for (let i = 0; i < n; i++) {
            rankMap.set(sortedArr[i], i);
        }

        // Update the original array to hold the rank of each element
        for (let i = 0; i < n; i++) {
            arr[i] = rankMap.get(arr[i]);
        }
    }
}
