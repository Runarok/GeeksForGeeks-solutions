//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

// Input handling
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question("", (t) => {
    let testCases = parseInt(t);
    let currentCase = 0;

    rl.on("line", (input) => {
        if (currentCase < testCases) {
            let mat = JSON.parse(input);
            let solution = new Solution();
            let result = solution.findPath(mat);

            if (result.length === 0) {
                console.log("[]");
            } else {
                console.log(result.join(" "));
            }
            console.log("~");

            currentCase++;
            if (currentCase === testCases) {
                rl.close();
            }
        }
    });
});

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[][]} mat
 * @returns {string[]}
 */
class Solution {
    // Function to find all possible paths in a maze
    findPath(mat) {
        
        // If the starting point is blocked, return an empty array
        if (mat[0][0] === 0) {
            return [];
        }
        
        const result = [];  // To store the possible paths
        const visited = new Set();  // To track visited cells
        
        // Function to get all valid neighbors of a cell
        const getNeighbors = (row, col) => {
            const neighbors = [];
            // Downward direction (row + 1)
            if (row + 1 < mat.length) {
                neighbors.push([row + 1, col, "D"]);
            }
            // Rightward direction (col + 1)
            if (col + 1 < mat[0].length) {
                neighbors.push([row, col + 1, 'R']);
            }
            // Upward direction (row - 1)
            if (row - 1 >= 0) {
                neighbors.push([row - 1, col, 'U']);
            }
            // Leftward direction (col - 1)
            if (col - 1 >= 0) {
                neighbors.push([row, col - 1, 'L']);
            }
            return neighbors;
        };
        
        // Depth First Search (DFS) function to explore the maze and find paths
        const dfs = (row, col, path) => {
            
            // If destination is reached, add the path to the result
            if (row === mat.length - 1 && col === mat[0].length - 1) {
                result.push(path.join(""));
                return;
            }
            
            // Mark the current cell as visited
            const key = `${row}-${col}`;
            visited.add(key);
            
            // Get all valid neighbors for the current cell
            const neighbors = getNeighbors(row, col);
            
            // Explore each neighbor
            for (const [neighborRow, neighborCol, direction] of neighbors) {
                const neighborKey = `${neighborRow}-${neighborCol}`;
                // If the neighbor is not visited and is not blocked
                if (!visited.has(neighborKey) && mat[neighborRow][neighborCol] !== 0) {
                    // Add the direction to the current path and explore further
                    path.push(direction);
                    dfs(neighborRow, neighborCol, path);
                    path.pop();  // Backtrack
                }
            }
            
            // Backtrack: unmark the current cell as visited
            visited.delete(key);
        };
        
        // Start DFS from the top-left cell (0, 0)
        dfs(0, 0, []);
        
        // Sort the result paths lexicographically
        result.sort();
        return result;
    }
}
