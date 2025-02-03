//{ Driver Code Starts
//Initial Template for javascript

process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
let inputString = '';
let currentLine = 0;
 
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
 
process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
        return string.trim();
    });
 
    main();
});
 
function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++){
        let [m,n] = readLine().split().map(x=>parseInt(x));
        
        let matrix = [];
        for(let i=0;i<m;i++)
        {
            let a = readLine().trim().split(' ').map((x) => parseInt(x));
            matrix.push(a);
        }
        
        let obj = new Solution();
        let res = obj.MaxGold(matrix);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

class Solution {
    MaxGold(matrix) {
        // Initialize the number of rows and columns
        const rows = matrix.length;
        const cols = matrix[0].length;

        // Array to keep track of maximum gold in each cell for the previous row
        let prev = new Array(cols + 2).fill(0);

        // Variable to store the maximum gold collected
        let max = 0;

        // Iterate through the rows of the matrix
        for (let i = 1; i <= rows; i++) {
            // Initialize an array for the current row with default values
            const curr = new Array(cols + 2).fill(-1);
            let woodCount = 0;

            // Process the first row where there is no previous row to compare
            for (let j = 1; j <= cols; j++) {
                if (i == 1) {
                    // Copy the values from the matrix to the current row for the first row
                    curr[j] = matrix[i - 1][j - 1];
                    max = Math.max(max, curr[j]);
                    continue;
                }

                // Skip processing for cells marked with -1 (blocked cells)
                if (matrix[i - 1][j - 1] == -1) {
                    woodCount++;
                    continue;
                }

                // Get the maximum gold collected from the previous row's adjacent cells
                curr[j] = Math.max(prev[j - 1], prev[j], prev[j + 1]);

                // If there is gold in the current cell, add it to the total gold
                if (curr[j] !== -1) {
                    curr[j] = curr[j] + matrix[i - 1][j - 1];
                }

                // Update the maximum gold if needed
                max = Math.max(max, curr[j]);
            }

            // If the entire row is blocked, exit the loop early
            if (woodCount == cols) break;

            // Move to the next row, setting the previous row to be the current one
            prev = curr;
        }

        // Return the maximum gold collected
        return max;
    }
}
