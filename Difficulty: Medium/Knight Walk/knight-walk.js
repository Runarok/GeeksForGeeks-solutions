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
    for(let i=0; i<t; i++)
    {
        let input_line = readLine().split(' ');
        let N = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let KnightPos = [parseInt(input_line[0]), parseInt(input_line[1])];
        
        input_line = readLine().split(' ');
        let TargetPos = [parseInt(input_line[0]), parseInt(input_line[1])];
        
        let obj = new Solution();
        let ans = obj.minStepToReachTarget(KnightPos, TargetPos, N);
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

// User function template for JavaScript
/**
 * @param {number[]} KnightPos
 * @param {number[]} TargetPos
 * @param {number} N
 * @returns {number}
 */

class Solution {
    // Function to find the minimum number of steps required for the knight to reach the target position.
    minStepToReachTarget(KnightPos, TargetPos, N) {
        // Possible moves a knight can make
        const moves = [
            [2, 1], [2, -1], [-2, 1], [-2, -1],
            [1, 2], [1, -2], [-1, 2], [-1, -2]
        ];

        // Convert positions to 0-based index
        const startX = KnightPos[0] - 1;
        const startY = KnightPos[1] - 1;
        const targetX = TargetPos[0] - 1;
        const targetY = TargetPos[1] - 1;

        // If the knight is already at the target position
        if (startX === targetX && startY === targetY) return 0;

        // Create a visited array to track visited positions
        const visited = Array.from({ length: N }, () => Array(N).fill(false));

        // Queue for BFS (stores [x, y, steps])
        const queue = [[startX, startY, 0]];
        visited[startX][startY] = true;

        // BFS to find the shortest path
        while (queue.length > 0) {
            const [x, y, steps] = queue.shift();

            // Explore all possible moves
            for (const [dx, dy] of moves) {
                const newX = x + dx;
                const newY = y + dy;

                // Check if the new position is within bounds and not visited
                if (newX >= 0 && newX < N && newY >= 0 && newY < N && !visited[newX][newY]) {
                    // If we reach the target position, return the number of steps
                    if (newX === targetX && newY === targetY) {
                        return steps + 1;
                    }

                    // Mark the position as visited and add it to the queue
                    visited[newX][newY] = true;
                    queue.push([newX, newY, steps + 1]);
                }
            }
        }

        // If target is unreachable (shouldn't happen in a valid chessboard), return -1
        return -1;
    }
}
