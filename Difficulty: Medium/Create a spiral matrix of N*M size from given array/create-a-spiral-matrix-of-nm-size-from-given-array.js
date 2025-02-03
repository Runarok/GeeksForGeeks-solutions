//{ Driver Code Starts
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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.spiralFill(n, m, arr);

        // Print the matrix row by row
        for (let row of res) {
            console.log(row.join(' '));
        }
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    /**
     * @param {number} n
     * @param {number} m
     * @param {number[]} arr
     * @returns {number[][]}
     */
    spiralFill(n, m, arr) {
        // Initialize the result matrix with -1
        let res = new Array(n).fill().map(() => new Array(m).fill(-1));

        // Directions for moving: right, down, left, up
        let dr = [0, 1, 0, -1];  // Row direction changes
        let dc = [1, 0, -1, 0];  // Column direction changes

        // Start from the first cell and initial direction (right)
        let dirIdx = 0;
        let index = 0;
        let r = 0, c = 0;

        // Continue filling until all elements in arr are placed
        while (index < arr.length) {
            res[r][c] = arr[index];  // Place the current element
            index++;

            // Calculate next position based on current direction
            let newR = r + dr[dirIdx];
            let newC = c + dc[dirIdx];

            // If next position is out of bounds or already filled, change direction
            if (newR < 0 || newR === n || newC < 0 || newC === m || res[newR][newC] !== -1) {
                dirIdx = (dirIdx + 1) % 4;  // Cycle through directions

                // Recalculate next position after direction change
                newR = r + dr[dirIdx];
                newC = c + dc[dirIdx];
            }

            // Move to the new valid position
            r = newR;
            c = newC;
        }

        return res;  // Return the final filled matrix
    }
}
