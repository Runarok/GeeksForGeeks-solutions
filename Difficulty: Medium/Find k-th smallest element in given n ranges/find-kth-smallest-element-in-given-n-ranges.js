//{ Driver Code Starts
// Initial Template for javascript
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
        let ranges = [];
        for(let j = 0;j < n;j++){
            let arr = readLine().split(' ').map(x=>parseInt(x));
            ranges.push(arr);
        }
        let q = parseInt(readLine());
        let queries = readLine().split(' ').map(x=>parseInt(x));
        let obj = new Solution();
        let res = obj.kthSmallestNum(n, ranges, q, queries);
        let S = "";
        for(let it=0;it<res.length;it++)
        {
            S+=res[it];
            S+=" ";
        }
        console.log(S);
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number} n
 * @param {number[][]} ranges
 * @param {number} q
 * @param {number[]} queries
 * @returns {number[]}
 */

class Solution {
    // Function to find the kth smallest number in the given ranges
    kthSmallestNum(n, ranges, q, queries) {

        // Step 1: Sort the ranges based on their starting values
        ranges.sort((a, b) => a[0] - b[0]);

        // Initialize an array to store the result for each query
        let result = [];

        // Step 2: For each query, find the kth smallest number
        for (let i = 0; i < q; i++) {
            let currentRange = 0;   // Keeps track of the current range
            let position = 0;       // Position in the sequence of numbers
            let lastPosition = 0;   // Position before adding the current range
            let found = false;      // Flag to check if the result is found for this query

            // Step 3: Iterate over each range
            for (let j = 0; j < n; j++) {
                
                // Skip this range if it ends before the current range position
                if (currentRange >= ranges[j][1]) continue;

                // Adjust the start of the range if necessary
                if (currentRange >= ranges[j][0]) ranges[j][0] = currentRange + 1;

                // Update the current range and position
                currentRange = ranges[j][1];
                lastPosition = position;
                position += ranges[j][1] - ranges[j][0] + 1; // Add the range size to the position

                // Step 4: Check if the kth smallest number is within this range
                if (position >= queries[i]) {
                    let gap = queries[i] - lastPosition; // How far into the range we need to go

                    // The kth smallest number is within the current range
                    result.push(ranges[j][0] + gap - 1);
                    found = true;
                    break; // Stop searching as we've found the answer for this query
                }
            }

            // If no answer was found for the query, append -1
            if (!found) result.push(-1);
        }

        // Return the array of results for all queries
        return result;
    }
}
