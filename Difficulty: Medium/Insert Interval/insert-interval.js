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
        let n = parseInt(readLine().trim());
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            let temp = readLine().split(' ').map(x => parseInt(x));
            arr[i] = [ temp[0], temp[1] ];
        }
        let h = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.insertInterval(arr, h);
        process.stdout.write("[");

        for (let i = 0; i < ans.length; i++) {
            process.stdout.write("[");
            process.stdout.write(ans[i][0] + "," + ans[i][1]);
            process.stdout.write("]");

            if (i !== ans.length - 1) {
                process.stdout.write(",");
            }
        }

        console.log("]");
        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    insertInterval(intervals, newInterval) {
        // Add the new interval to the list of intervals
        intervals.push(newInterval);

        // Sort the intervals based on the starting point of each interval
        intervals.sort((a, b) => a[0] - b[0]);

        // Initialize an array to hold the merged intervals
        let mergedIntervals = [];
        
        // Iterate over the sorted intervals
        for (let i = 0; i < intervals.length; i++) {
            let currentStart = intervals[i][0];
            let currentEnd = intervals[i][1];

            // If the merged intervals array is empty or if the current interval does not overlap with the last merged one
            if (mergedIntervals.length === 0 || mergedIntervals[mergedIntervals.length - 1][1] < currentStart) {
                // Add the current interval as a new non-overlapping interval
                mergedIntervals.push([currentStart, currentEnd]);
            } else {
                // Merge the current interval with the last one in the merged intervals array by extending the end time
                mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], currentEnd);
            }
        }

        // Return the merged intervals
        return mergedIntervals;
    }
}
