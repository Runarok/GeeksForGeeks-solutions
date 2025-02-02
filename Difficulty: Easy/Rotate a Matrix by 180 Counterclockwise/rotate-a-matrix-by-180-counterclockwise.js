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

        let n = parseInt(readLine());

        let matrix = [];
        for (let i = 0; i < n; i++) {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            matrix.push(a);
        }

        let obj = new Solution();
        obj.rotateMatrix(matrix);
        let res = matrix;
        let S_res = '';
        for (let row of res) {
            let tmp = '';
            for (let col of row) {
                tmp += col;
                tmp += ' ';
            }
            console.log(tmp);
        }
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    /**
     * Rotates a matrix 180 degrees in-place.
     * @param {number[][]} mat - The matrix to be rotated.
     * @return {void}
     */
    rotateMatrix(mat) {
        // Get the size of the matrix (assuming square matrix)
        const n = mat.length;

        // Create a new matrix to store the rotated values
        const res = Array.from({ length: n }, () => Array(n).fill(0));
        
        // Traverse through the original matrix and place each element in the rotated position
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                res[i][j] = mat[n - i - 1][n - j - 1];
            }
        }
        
        // Copy the rotated result back into the original matrix
        for (let i = 0; i < n; i++) {
            mat[i] = res[i].slice();
        }
    }
}
