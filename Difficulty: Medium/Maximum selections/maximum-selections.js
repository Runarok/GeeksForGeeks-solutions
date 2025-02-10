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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        let input_line1 = readLine().split(' ');
        let ranges = [];
        for(let i=0;i<n*2;i+=2){
            let v = [];
            v[0] = parseInt(input_line1[i]);
            v[1] = parseInt(input_line1[i+1]);
            ranges.push(v);
        }
        
        let obj = new Solution();
        let ans = obj.max_non_overlapping(ranges);
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[][]} ranges - Array of intervals where each interval is represented as [start, end]
 * @returns {number} - Maximum number of non-overlapping intervals that can be selected
 */

class Solution {
    
    // Function to find the maximum number of non-overlapping intervals
    max_non_overlapping(ranges) {
        // Sort intervals by their ending times to ensure we select the earliest finishing intervals first.
        ranges.sort((a, b) => a[1] - b[1]);

        let count = 0; // Variable to track the number of non-overlapping intervals selected
        let currentEnd = -Infinity; // Keeps track of the end time of the last selected interval

        // Iterate through the sorted intervals
        for (let i = 0; i < ranges.length; i++) {
            const [start, end] = ranges[i];

            // If the current interval starts after or exactly at the last selected interval's end time
            if (start >= currentEnd) {
                count++; // Select the interval
                currentEnd = end; // Update the last selected interval's end time
            }
        }

        // Return the count of maximum non-overlapping intervals
        return count;
    }
}
