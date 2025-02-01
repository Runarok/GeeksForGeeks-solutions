//{ Driver Code Starts
inputString = '';
currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let matrix = [];
        for (let i = 0; i < n; i++) {
            let row = readLine().split(' ').map(Number);
            matrix.push(row);
        }
        const sol = new Solution();
        console.log(sol.maximumPath(matrix));
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
class Solution {
    maximumPath(mat) {
        let m = mat.length;
        let n = mat[0].length;
        
        // Create a 2D array to store the maximum path sum at each cell
        let opt = Array.from({ length: m }, () => Array(n).fill(0));
        
        // Initialize the first row with values from mat
        for (let j = 0; j < n; j++) {
            opt[0][j] = mat[0][j];
        }
        
        // Fill the opt matrix by calculating the maximum path sum
        for (let i = 1; i < m; i++) {
            for (let j = 0; j < n; j++) {
                // Get values from the previous row (top-left, top, top-right)
                let v1 = (i - 1 >= 0 && j - 1 >= 0) ? opt[i - 1][j - 1] : 0; // top-left
                let v2 = (i - 1 >= 0) ? opt[i - 1][j] : 0; // top
                let v3 = (i - 1 >= 0 && j + 1 < n) ? opt[i - 1][j + 1] : 0; // top-right
                
                // Update the current cell with the maximum path sum
                opt[i][j] = Math.max(v1, v2, v3) + mat[i][j];
            }
        }
        
        // Return the maximum value in the last row, which contains the maximum path sum
        return Math.max(...opt[m - 1]);
    }
}
