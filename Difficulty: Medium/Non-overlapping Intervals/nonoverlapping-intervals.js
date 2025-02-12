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
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let intervals = new Array(n);
        for (let i = 0; i < n; i++) {
            input_line = readLine().split(' ');
            intervals[i] = [ parseInt(input_line[0]), parseInt(input_line[1]) ];
        }
        let obj = new Solution();
        let ans = obj.minRemoval(intervals);
        console.log(ans);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][]} intervals
 * @returns {number}
 */

class Solution {
    /**
     * Function to find the minimum number of removals required to make the intervals non-overlapping
     * @param {number[][]} intervals
     * @returns {number}
     */
    minRemoval(intervals) {
        // Sorting intervals by their ending values
        let cnt = 0;  // Variable to count the number of removals
        intervals.sort((a, b) => a[1] - b[1]);  // Sort intervals by end time
        
        let end = intervals[0][1];  // Initialize the end time with the first interval's end
        
        // Iterate through the sorted intervals
        for (let i = 1; i < intervals.length; i++) {
            // If the current interval starts before the previous one ends, it overlaps
            if (intervals[i][0] < end) {
                cnt++;  // Increment the removal counter
            } else {
                end = intervals[i][1];  // Update the end time to the current interval's end
            }
        }
        
        return cnt;  // Return the minimum number of removals required
    }
}
