//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine());

    for (let _ = 0; _ < t; _++) {
        const n = parseInt(readLine());
        const arr = readLine().split(' ').map(Number);
        const barriers = [];

        for (let i = 0; i < arr.length; i += 2) {
            barriers.push([ arr[i], arr[i + 1] ]);
        }

        const sol = new Solution();
        console.log(sol.emptyLanes(n, barriers));
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to find the number of free lanes after placing barriers
    emptyLanes(tracks, barriers) {
        // If no tracks, return 0
        if (tracks === 0) return 0;

        // Sort barriers by their start position
        barriers.sort((a, b) => a[0] - b[0]);

        let totalBlocked = 0; // To store the total number of blocked lanes
        let currStart = -1, currEnd = -1; // To track the current block of lanes

        // Iterate through the barriers
        for (let [start, end] of barriers) {
            // If the current barrier doesn't overlap with the previous, add the blocked lanes to the total
            if (currEnd < start) {
                if (currEnd !== -1) totalBlocked += (currEnd - currStart + 1);
                currStart = start;
                currEnd = end;
            } else {
                // If there is overlap, extend the current blocked region
                currEnd = Math.max(currEnd, end);
            }
        }

        // After finishing the loop, check if there's any uncounted blocked region
        if (currStart !== -1) totalBlocked += (currEnd - currStart + 1);

        // Calculate free lanes and return the result
        let freeLanes = tracks - totalBlocked;
        return freeLanes > 0 ? freeLanes : 0; // Ensure no negative free lanes
    }
}
