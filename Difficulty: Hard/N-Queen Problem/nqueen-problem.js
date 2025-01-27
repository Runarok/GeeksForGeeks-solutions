//{ Driver Code Starts
// Initial Template for javascript

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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine())
        let obj = new Solution();
        let res = obj.nQueen(n);
        if (res.length == 0) {
            console.log(-1);
        } else {
            res.sort((a, b) => {
                for (let j = 0; j < a.length; j++) {
                    if (a[j] !== b[j]) {
                        return a[j] - b[j];
                    }
                }
                return a.length - b.length;
            });
            let ans = "";
            for (let row of res) {
                let s = "[";
                for (let k = 0; k < row.length; k++) {
                    s += row[k];
                    s += " ";
                }
                s += "]";
                ans += s;
                ans += " ";
            }
            console.log(ans);
        }

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @return {number[][]}
 */

class Solution {
    nQueen(n) {
        const result = [];
        const board = new Array(n).fill(0);  // Initialize board with n columns, each having a value 0
        const usedRows = new Array(n).fill(false);
        const usedDiag1 = new Array(2 * n - 1).fill(false);  // To track diagonals (r - c)
        const usedDiag2 = new Array(2 * n - 1).fill(false);  // To track diagonals (r + c)

        const backtrack = (col) => {
            if (col === n) {
                // When we've placed all queens, store the current configuration
                result.push([...board]);
                return;
            }
            
            for (let row = 0; row < n; row++) {
                // Check if it's safe to place a queen at (row, col)
                if (!usedRows[row] && !usedDiag1[row - col + (n - 1)] && !usedDiag2[row + col]) {
                    // Mark the row and diagonals as used
                    board[col] = row + 1;
                    usedRows[row] = true;
                    usedDiag1[row - col + (n - 1)] = true;
                    usedDiag2[row + col] = true;
                    
                    // Recursively try to place queens in the next column
                    backtrack(col + 1);
                    
                    // Backtrack: unmark the row and diagonals
                    usedRows[row] = false;
                    usedDiag1[row - col + (n - 1)] = false;
                    usedDiag2[row + col] = false;
                }
            }
        };

        // Start the backtracking from the first column
        backtrack(0);
        
        return result;
    }
}
