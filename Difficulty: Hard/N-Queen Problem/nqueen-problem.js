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
        const results = [];
        const cols = new Array(n).fill(false);  // Tracks columns where queens are placed
        const diag1 = new Array(2 * n - 1).fill(false);  // Tracks main diagonals
        const diag2 = new Array(2 * n - 1).fill(false);  // Tracks anti-diagonals
        
        function backtrack(row, permutation) {
            if (row === n) {
                results.push([...permutation]);  // Store a valid solution
                return;
            }

            for (let col = 0; col < n; col++) {
                if (cols[col] || diag1[row + col] || diag2[row - col + n - 1]) {
                    continue;  // Skip unsafe positions
                }

                // Place queen
                cols[col] = true;
                diag1[row + col] = true;
                diag2[row - col + n - 1] = true;
                permutation.push(col + 1);  // Store 1-based index

                // Recur for the next row
                backtrack(row + 1, permutation);

                // Backtrack (remove queen)
                cols[col] = false;
                diag1[row + col] = false;
                diag2[row - col + n - 1] = false;
                permutation.pop();
            }
        }

        backtrack(0, []);
        return results;
    }
}
