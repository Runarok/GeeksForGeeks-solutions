//{ Driver Code Starts
"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let mat = new Array(n);

        for (let j = 0; j < n; j++) {
            let input_line = readLine().split(" ");
            mat[j] = new Array(m);
            for (let k = 0; k < m; k++) mat[j][k] = input_line[k];
        }

        let word = readLine();
        let obj = new Solution();
        let res = obj.isWordExist(mat, word);

        if (res) {
            console.log("true");
        } else {
            console.log("false");
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string[]} mat
 * @param {string} word
 * @returns {boolean}
 */

class Solution {
    isWordExist(mat, word) {
        const n = mat.length;
        const m = mat[0].length;
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // directions for up, down, left, right

        // Helper function for Depth First Search (DFS)
        function dfs(i, j, index) {
            // If the index equals the length of the word, we've found the word
            if (index === word.length) return true;

            // Check for out of bounds or mismatch
            if (i < 0 || i >= n || j < 0 || j >= m || mat[i][j] !== word[index]) {
                return false;
            }

            // Temporarily mark this cell as visited by replacing it with a special character (e.g., '#')
            const temp = mat[i][j];
            mat[i][j] = '#';

            // Explore all four possible directions
            for (let [dx, dy] of directions) {
                const ni = i + dx;
                const nj = j + dy;
                if (dfs(ni, nj, index + 1)) {
                    return true;
                }
            }

            // Backtrack: restore the original value of the cell
            mat[i][j] = temp;
            return false;
        }

        // Start from every cell in the matrix
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (mat[i][j] === word[0] && dfs(i, j, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
