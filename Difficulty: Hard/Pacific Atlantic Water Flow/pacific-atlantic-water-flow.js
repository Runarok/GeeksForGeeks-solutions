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

        let a = new Array(2);
        let input_a = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < 2; i++) {
            a[i] = input_a[i];
        }

        let arr = [];
        for (let i = 0; i < a[0]; i++) {
            let a = readLine().trim().split(' ').map((x) => parseInt(x));
            arr.push(a);
        }

        let obj = new Solution();
        let res = obj.countCoordinates(arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param number[][] mat
    * @returns number
    */
    countCoordinates(mat) {
        // Return 0 if the matrix is empty
        if (!mat.length) return 0; 
        
        const n = mat.length; // number of rows
        const m = mat[0].length; // number of columns
        
        // Initialize visited arrays for Pacific and Atlantic oceans
        const pacific = Array.from({ length: n }, () => Array(m).fill(false));
        const atlantic = Array.from({ length: n }, () => Array(m).fill(false));
        
        // Define directions for moving (right, down, left, up)
        const directions = [
            [0, 1], 
            [1, 0], 
            [0, -1], 
            [-1, 0] 
        ];
    
        // Depth-first search function to mark reachable cells
        const dfs = (x, y, visited) => {
            const stack = [[x, y]]; // Stack for DFS
            visited[x][y] = true; // Mark the starting cell as visited
            
            // Loop through the stack
            while (stack.length) {
                const [currX, currY] = stack.pop();
    
                // Check all 4 possible directions
                for (const [dx, dy] of directions) {
                    const nx = currX + dx;
                    const ny = currY + dy;
                    
                    // Check if the new position is within bounds and can flow (height is greater or equal)
                    if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && mat[nx][ny] >= mat[currX][currY]) {
                        visited[nx][ny] = true; // Mark as visited
                        stack.push([nx, ny]); // Add to stack to explore further
                    }
                }
            }
        };
    
        // Perform DFS from the first and last row for Pacific and Atlantic oceans
        for (let i = 0; i < n; i++) {
            dfs(i, 0, pacific); // Pacific DFS on the left edge
            dfs(i, m - 1, atlantic); // Atlantic DFS on the right edge
        }
        // Perform DFS from the first and last column for both oceans
        for (let j = 0; j < m; j++) {
            dfs(0, j, pacific); // Pacific DFS on the top edge
            dfs(n - 1, j, atlantic); // Atlantic DFS on the bottom edge
        }
    
        // Count cells that can reach both oceans
        let count = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (pacific[i][j] && atlantic[i][j]) count++; // Increment count if cell can reach both oceans
            }
        }
        
        return count; // Return the total count
    }
}
