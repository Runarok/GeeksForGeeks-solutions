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

        let rows = parseInt(readLine());

        let columns = parseInt(readLine());

        let heights = [];
        for (let i = 0; i < rows; i++) {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            heights.push(a);
        }

        let obj = new Solution();
        let res = obj.MinimumEffort(rows, columns, heights);
        console.log(res);
    }
}

// } Driver Code Ends


class Solution {
    /**
    * @param number rows
    * @param number columns
    * @param number[][] heights
    * @returns number
    */
    MinimumEffort(rows, columns, heights) {
        // Directions to move in 4 directions (up, down, left, right)
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        // Helper function to perform BFS and check if the path exists with max effort <= mid
        const bfs = (maxEffort) => {
            let queue = [[0, 0]]; // Starting at the top-left corner
            let visited = Array.from({ length: rows }, () => Array(columns).fill(false));
            visited[0][0] = true;

            while (queue.length > 0) {
                let [x, y] = queue.shift();
                
                // If we've reached the bottom-right corner
                if (x === rows - 1 && y === columns - 1) return true;
                
                // Explore all 4 directions
                for (let [dx, dy] of directions) {
                    let nx = x + dx, ny = y + dy;
                    
                    if (nx >= 0 && nx < rows && ny >= 0 && ny < columns && !visited[nx][ny]) {
                        // Check if the height difference between current and next cell is within allowed effort
                        if (Math.abs(heights[x][y] - heights[nx][ny]) <= maxEffort) {
                            visited[nx][ny] = true;
                            queue.push([nx, ny]);
                        }
                    }
                }
            }
            return false;
        };

        // Binary search to find the minimum maximum effort
        let low = 0, high = 1000000; // max height difference in the grid
        let result = high;
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (bfs(mid)) {
                result = mid;  // Mid value is feasible, so we try for a smaller effort
                high = mid - 1;
            } else {
                low = mid + 1;  // Mid value is not feasible, so we increase the effort
            }
        }
        
        return result;
    }
}
