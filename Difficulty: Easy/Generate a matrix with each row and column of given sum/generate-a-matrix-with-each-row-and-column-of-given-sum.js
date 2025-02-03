//{ Driver Code Starts

function main() {
    const input = require("readline").createInterface({
        input : process.stdin,
        output : process.stdout
    });

    let inputLines = [];
    input.on("line", line => inputLines.push(line));
    input.on("close", () => {
        let t = parseInt(inputLines[0]);
        let idx = 1;

        while (t-- > 0) {
            // Read first row array (row sums)
            let row = inputLines[idx++].split(" ").map(Number);

            // Read second column array (column sums)
            let col = inputLines[idx++].split(" ").map(Number);

            let solution = new Solution();
            let ans = solution.generateMatrix([...row ], [...col ]);

            let n = ans.length;
            let m = ans[0].length;

            if (n !== row.length || m !== col.length) {
                console.log("false");
                console.log("~");
                return;
            }

            // Validate the output matrix
            let isValid = true;

            // Check row sums
            for (let i = 0; i < row.length; i++) {
                let sum = ans[i].reduce((acc, val) => acc + val, 0);
                if (sum !== row[i]) {
                    isValid = false;
                    break;
                }
            }

            // Check column sums
            if (isValid) {
                for (let j = 0; j < col.length; j++) {
                    let sum = 0;
                    for (let i = 0; i < row.length; i++) {
                        sum += ans[i][j];
                    }
                    if (sum !== col[j]) {
                        isValid = false;
                        break;
                    }
                }
            }

            // Output result based on validation
            console.log(isValid ? "true" : "false");
            console.log("~");
        }
    });
}

main();

// } Driver Code Ends

/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @returns {number[][]}
 */
class Solution {
    generateMatrix(rowSum, colSum) {
        // Initialize the matrix and current row/column sums
        let n = rowSum.length, m = colSum.length;
        let result = Array.from({ length: n }, () => Array(m).fill(0));
        let currentRowSum = new Array(n).fill(0);
        let currentColSum = new Array(m).fill(0);
        
        // Iterate over the matrix to fill it while respecting rowSum and colSum
        for (let i = 0; i < rowSum.length; i++) {
            for (let j = 0; j < colSum.length; j++) {
                // Calculate the remaining sum that can be assigned to the current cell
                let rowRemaining = rowSum[i] - currentRowSum[i];
                let colRemaining = colSum[j] - currentColSum[j];
                
                // Set the value in the matrix as the minimum of remaining row and column sums
                result[i][j] = Math.min(rowRemaining, colRemaining);
                
                // Update the row and column sums after assigning the value
                currentRowSum[i] += result[i][j];
                currentColSum[j] += result[i][j];
            }
        }
        
        // Return the filled matrix
        return result;
    }
}
