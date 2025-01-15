//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
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
    for(;i<t;i++)
    {
        let grid = [];
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let index = 0;
        for(let i=0;i<9;i++){
            let row = [];
            for(let j=0;j<9;j++){
                row.push(input_ar1[index++]);
            }
            grid.push(row);
        }
        let obj = new Solution();
        if(obj.SolveSudoku(grid)){
            obj.printGrid(grid);
        }
        else{
            console.log("No solution exists");
        }
        
    }
}
// } Driver Code Ends


//User function Template for javascript

class Solution {

    /**
     * @param {number[][]} grid
     * @returns {boolean}
    */
    
    SolveSudoku(grid) {
        // Helper function to check if a number can be placed at (row, col)
        const isSafe = (grid, row, col, num) => {
            // Check if the number is not repeated in the row
            for (let i = 0; i < 9; i++) {
                if (grid[row][i] === num) {
                    return false;
                }
            }
            // Check if the number is not repeated in the column
            for (let i = 0; i < 9; i++) {
                if (grid[i][col] === num) {
                    return false;
                }
            }
            // Check if the number is not repeated in the 3x3 subgrid
            const startRow = Math.floor(row / 3) * 3;
            const startCol = Math.floor(col / 3) * 3;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (grid[startRow + i][startCol + j] === num) {
                        return false;
                    }
                }
            }
            return true;
        };

        // Helper function to solve the sudoku using backtracking
        const solve = (grid) => {
            for (let row = 0; row < 9; row++) {
                for (let col = 0; col < 9; col++) {
                    if (grid[row][col] === 0) { // Find an empty cell
                        for (let num = 1; num <= 9; num++) {
                            if (isSafe(grid, row, col, num)) {
                                grid[row][col] = num;
                                if (solve(grid)) {
                                    return true; // If solving continues, return true
                                }
                                grid[row][col] = 0; // Backtrack
                            }
                        }
                        return false; // No valid number found, backtrack
                    }
                }
            }
            return true; // Sudoku solved
        };

        return solve(grid);
    }
    
    /**
     * @param {number[][]} grid
    */
    
    printGrid(grid) {
        let result = [];
        for (let i = 0; i < 9; i++) {
            result.push(grid[i].join(" "));
        }
        console.log(result.join(" "));
    }
}
