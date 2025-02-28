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
        let s = readLine();
        let obj = new Solution();
        let res = obj.maximumPartition(s);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    // Function to find the maximum number of partitions in a string
    maximumPartition(s) {
        // Array to store the last index of each character ('a' to 'z')
        const lastIndex = new Array(26).fill(-1), n = s.length;
        
        // Fill the last index array with the last occurrence of each character in the string
        for (let i = 0; i < n; i++) {
            lastIndex[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
        }
        
        // Initialize count and the current end of the partition
        let count = 0, currEnd = 0;
        
        // Loop through the string to identify the partitions
        for (let i = 0; i < n; i++) {
            // Update the current end to be the farthest last occurrence
            currEnd = Math.max(currEnd, lastIndex[s.charCodeAt(i) - 'a'.charCodeAt(0)]);
            
            // If we've reached the current end, a partition is found
            if (i === currEnd) count++;
        }
        
        // Return the number of partitions found
        return count;
    }
}
