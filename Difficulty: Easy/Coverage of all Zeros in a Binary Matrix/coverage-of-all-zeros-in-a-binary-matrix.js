//{ Driver Code Starts

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

        const [n, m] = readLine().split(' ').map(x => parseInt(x));

        let matrix = [];
        for (let i = 0; i < n; i++) {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            matrix.push(a);
        }

        let obj = new Solution();
        let res = obj.findCoverage(matrix);
        console.log(res);
    }
}

// } Driver Code Ends


class Solution {
    /**
     * Function to calculate the coverage of 1's surrounding 0's in a matrix.
     * It counts the number of adjacent 1's surrounding each 0.
     * 
     * @param {number[][]} matrix - A 2D matrix where 0 represents an empty cell and 1 represents a filled cell.
     * @returns {number} - The total number of 1's surrounding the 0's.
     */
    findCoverage(matrix) {
        let n = matrix.length;  // Number of rows
        let m = matrix[0].length;  // Number of columns
        let coverageSum = 0;  // To store the total coverage sum

        // Directions arrays for left, right, up, and down movements
        const dx = [0, 0, -1, 1];  // Row movements for left, right, up, down
        const dy = [-1, 1, 0, 0];  // Column movements for left, right, up, down

        // Loop through each cell in the matrix
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                // If the current cell is 0, check its adjacent cells
                if (matrix[i][j] === 0) {
                    // Check all four adjacent cells (left, right, up, down)
                    for (let k = 0; k < 4; k++) {
                        let ni = i + dx[k];  // New row index
                        let nj = j + dy[k];  // New column index

                        // If the adjacent cell is within bounds and contains a 1, increase coverage
                        if (ni >= 0 && ni < n && nj >= 0 && nj < m && matrix[ni][nj] === 1) {
                            coverageSum++;
                        }
                    }
                }
            }
        }

        return coverageSum;  // Return the total coverage sum
    }
}
