//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let nd = readLine().split(' ').map(Number);
        let n = nd[0];
        let m = nd[1];

        let arr = [];

        for (let j = 0; j < n; j++) {
            let input_arr = readLine().split(' ').map(Number);
            arr[j] = input_arr;
        }

        let obj = new Solution();
        let res = obj.FindExitPoint(n, m, arr);
        let ans = "";
        for (let j = 0; j < res.length; j++) {
            ans += res[j];
            if (j < res.length - 1) ans += " ";
        }
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} matrix
 * @returns {INTEGER_ARRAY}
 */

class Solution {
    // Function to find the exit point in a matrix following the specified rules
    FindExitPoint(n, m, mat) {
        let i = 0, j = 0; // Starting coordinates (top-left corner)
        let dir = 'R'; // Initial direction is right

        // Traverse the matrix until we go out of bounds
        while (i >= 0 && i < n && j >= 0 && j < m) {
            if (mat[i][j] === 0) {
                // If current cell is 0, move in the current direction
                if (dir === 'R') {
                    j = j + 1; // Move right
                } else if (dir === 'L') {
                    j = j - 1; // Move left
                } else if (dir === 'U') {
                    i = i - 1; // Move up
                } else {
                    i = i + 1; // Move down
                }
            } else if (mat[i][j] === 1) {
                // If current cell is 1, change direction and mark the cell as visited (set to 0)
                mat[i][j] = 0; // Mark the cell as visited
                if (dir === 'R') {
                    dir = 'D'; // Change direction to down
                    i = i + 1; // Move down
                } else if (dir === 'D') {
                    dir = 'L'; // Change direction to left
                    j = j - 1; // Move left
                } else if (dir === 'L') {
                    dir = 'U'; // Change direction to up
                    i = i - 1; // Move up
                } else {
                    dir = 'R'; // Change direction to right
                    j = j + 1; // Move right
                }
            }
        }

        // Adjust if out of bounds and return the exit point coordinates
        if (j < 0) {
            j = j + 1;
        } else if (j >= m) {
            j = j - 1;
        }
        if (i < 0) {
            i = i + 1;
        } else if (i >= n) {
            i = i - 1;
        }

        return [i, j]; // Return the exit point coordinates
    }
}
