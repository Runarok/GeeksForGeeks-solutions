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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        input_line = readLine().split(' ');
        let m = parseInt(input_line[0]);
        input_line = readLine().split(' ');
        let k = parseInt(input_line[0]);
        let operators = []; 
        for(let i=0;i<k;i++)
        {
            input_line = readLine().split(' ');
            let x = parseInt(input_line[0]);
            let y = parseInt(input_line[1]);
            operators.push([x,y]);
        }
        let obj = new Solution();
        let ans = obj.numOfIslands(n, m, operators);
        let s = "";
        for(let i=0 ; i < ans.length ;i++)
        {
            s+=ans[i];
            s+=" ";
        }
        console.log(s);
    
console.log("~");
}
}
// } Driver Code Ends


// User function template for JavaScript
/**
 * @param {number} rows - Number of rows in the grid.
 * @param {number} cols - Number of columns in the grid.
 * @param {number[][]} operators - List of operators specifying the coordinates where islands are added.
 * @returns {number[]} - An array containing the number of islands after each operation.
 */

class Solution {
    // Function to count the number of islands after each operation
    numOfIslands(rows, cols, operators) {
        // Delta arrays to move in 4 directions (up, right, down, left)
        let rDelta = [-1, 0, 1, 0];
        let cDelta = [0, 1, 0, -1];
        
        // Initialize parent matrix for union-find (disjoint-set)
        let parent = [...Array(rows)].map((_, i) => [...Array(cols)].map((_, j) => [i, j]));
        
        // Initialize grid (matrix) to track land (1) or water (0)
        let matrix = [...Array(rows)].map(x => new Array(cols).fill(0));
        
        // Variable to track the number of islands
        let components = 0;
        
        // Function to find the root parent of a cell
        const getParent = (i, j) => {
            if (parent[i][j][0] === i && parent[i][j][1] === j) return [i, j];
            parent[i][j] = getParent(parent[i][j][0], parent[i][j][1]);
            return parent[i][j];
        };
        
        // Function to union two sets (cells)
        const union = (a, b) => {
            let [apr, apc] = getParent(a[0], a[1]);
            let [bpr, bpc] = getParent(b[0], b[1]);
            if (apr === bpr && apc === bpc) return; // If they are already in the same set, do nothing
            parent[apr][apc] = [bpr, bpc];  // Union the sets
        };
        
        // Result array to store the number of islands after each operation
        let ans = [];
        
        // Process each operator (which marks a new land cell)
        for (let [r, c] of operators) {
            if (matrix[r][c]) {  // If the cell is already land, skip the operation
                ans.push(components);
                continue;
            }
            
            components++;  // Increment the island count as we add a new land cell
            
            matrix[r][c] = 1;  // Mark the current cell as land (1)
            
            // Check all 4 neighboring cells (up, right, down, left)
            for (let k = 0; k < 4; k++) {
                let nr = r + rDelta[k];  // Neighbor row
                let nc = c + cDelta[k];  // Neighbor column
                
                // If the neighbor is within bounds and is land, attempt to union
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && matrix[nr][nc]) {
                    let p = getParent(nr, nc);  // Get parent of neighbor
                    let px = getParent(r, c);   // Get parent of the current cell
                    
                    // If they are in different sets, union them and decrement the island count
                    if (p.join("") !== px.join("")) {
                        union([nr, nc], [r, c]);
                        components--;
                    }
                }
            }
            
            // Push the current number of islands to the result array
            ans.push(components);
        }
        
        return ans;  // Return the array of island counts after each operation
    }
}
