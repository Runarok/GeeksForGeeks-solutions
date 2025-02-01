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
        let start = readLine().split(' ').map(Number);
        let end = readLine().split(' ').map(Number);

        let obj = new Solution();
        console.log(obj.maxMeetings(start, end));
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} start
 * @param {number[]} end
 * @returns {number}
 */

class Solution {
    // Function to find the maximum number of meetings that can
    // be performed in a meeting room.
    maxMeetings(start, end) {
        // Step 1: Pair start and end times together and sort them by end time
        let meetings = [];
        for (let i = 0; i < start.length; i++) {
            meetings.push([start[i], end[i]]);
        }
        
        // Sort meetings by end time
        meetings.sort((a, b) => a[1] - b[1]);

        // Step 2: Greedily select meetings
        let count = 1;  // We can always select the first meeting
        let lastEndTime = meetings[0][1];  // End time of the first meeting
        
        // Step 3: Loop through the sorted meetings
        for (let i = 1; i < meetings.length; i++) {
            // If the start time of the current meeting is strictly greater than
            // the end time of the last selected meeting, select it
            if (meetings[i][0] > lastEndTime) {
                count++;
                lastEndTime = meetings[i][1];  // Update the end time of the last selected meeting
            }
        }
        
        return count;  // Return the maximum number of meetings
    }
}
