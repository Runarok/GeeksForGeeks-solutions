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
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let mat = new Array();
        for (let i = 0; i < n; i++) {
            let g = new Array();
            let input_line = readLine().split(" ");
            for (let j = 0; j < m; j++) {
                g.push(parseInt(input_line[j]));
            }
            mat.push(g);
        }

        let obj = new Solution();
        let ans = obj.orangesRotting(mat);
        if (ans == -0) ans = 0;
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} mat
 * @returns {number}
 */
class Solution {
    // Function to find the minimum time required to rot all oranges
    orangesRotting(mat) {
        const m = mat.length; // number of rows
        const n = mat[0].length; // number of columns
        const queue = []; // Queue to store positions of rotten oranges and their time
        const visited = Array.from({length: m}, () => Array(n).fill(0)); // Visited array to track rotting process
        let maxTime = 0; // Track the maximum time it takes for all oranges to rot
        let freshCount = 0; // Count of fresh oranges

        // Step 1: Identify initial rotten oranges and count fresh oranges
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] === 2) {
                    queue.push([i, j, maxTime]); // Rotten orange with time 0
                } else if (mat[i][j] === 1) {
                    freshCount++; // Count fresh oranges
                }
            }
        }

        let front = 0; // Start processing the queue

        // Step 2: Process the queue to rot adjacent fresh oranges
        while (front < queue.length) {
            let [row, col, time] = queue[front++]; // Get current position and time
            maxTime = time; // Update max time as we process
            const neighbours = [
                [row - 1, col], // Up
                [row + 1, col], // Down
                [row, col - 1], // Left
                [row, col + 1]  // Right
            ];

            // Step 3: Check all adjacent cells
            for (let [i, j] of neighbours) {
                if (i >= 0 && j >= 0 && i < m && j < n && mat[i][j] === 1 && visited[i][j] !== 2) {
                    queue.push([i, j, time + 1]); // Add to queue with incremented time
                    visited[i][j] = 2; // Mark as visited
                    freshCount--; // Decrease fresh orange count
                }
            }
        }

        // Step 4: If no fresh oranges are left, return the time; otherwise, return -1
        return freshCount === 0 ? maxTime : -1;
    }
}
