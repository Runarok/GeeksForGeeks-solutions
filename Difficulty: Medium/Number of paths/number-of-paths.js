//{ Driver Code Starts
// Initial Template for javascript

// Position this line where user code will be pasted.

// Function to handle input and output
function main() {
    const readline = require('readline');

    const rl =
        readline.createInterface({input : process.stdin, output : process.stdout});

    let tokens = [];

    rl.on('line', (line) => {
          // Split the input line into tokens separated by whitespace
          tokens = tokens.concat(line.trim().split(/\s+/));
      }).on('close', () => {
        let idx = 0;
        const t = parseInt(tokens[idx++], 10); // Number of test cases
        const sol = new Solution();

        for (let i = 0; i < t; i++) {
            // Parse base and exponent for each test case
            const m = parseInt(tokens[idx++]);
            const n = parseInt(tokens[idx++], 10);
            let obj = new Solution();
            let ans = obj.numberOfPaths(m, n);
            console.log(ans);

            console.log("~");
        }

        process.exit(0);
    });
}

// Invoke the main function to start the program
main();

// } Driver Code Ends


class Solution {
    // This function calculates the number of unique paths from the current position (i, j) 
    // to the destination (m-1, n-1) by recursively moving either right or down.
    paths(currentRow, currentCol, totalRows, totalCols, memo) {
        // If the result for the current position (i, j) is already calculated, return it from memo
        if(memo[currentRow + '_' + currentCol]) return memo[currentRow + '_' + currentCol];

        // If we've reached the destination (bottom-right corner), there is one valid path
        if(currentRow == totalRows - 1 && currentCol == totalCols - 1) return 1;

        let result = 0;

        // If it's possible to move down, call the function for the next row
        if(currentRow < totalRows - 1)
            result += this.paths(currentRow + 1, currentCol, totalRows, totalCols, memo);

        // If it's possible to move right, call the function for the next column
        if(currentCol < totalCols - 1)
            result += this.paths(currentRow, currentCol + 1, totalRows, totalCols, memo);

        // Store the result for the current position in the memo object
        memo[currentRow + '_' + currentCol] = result;

        // Return the calculated result
        return result;
    }

    // This is the main function that initiates the path calculation from the top-left corner (0, 0)
    numberOfPaths(rows, cols) {
        // Initialize the memoization object to store the computed results for each cell
        let memo = {};
        
        // Start the path calculation from the top-left corner (0, 0)
        return this.paths(0, 0, rows, cols, memo);
    }
}
