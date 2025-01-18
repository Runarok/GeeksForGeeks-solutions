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


//User function Template for javascript
/**
 * @param {number[]} KnightPos
 * @param {number[]} TargetPos
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Function to find the minimum number of steps required to reach the target position by the Knight.
    minStepToReachTarget(KnightPos, TargetPos, N) {
        // Directions a knight can move
        let moves = [
            [2, 1], [2, -1], [-2, 1], [-2, -1],
            [1, 2], [1, -2], [-1, 2], [-1, -2]
        ];

        // Adjust to 0-indexed for internal calculations
        let startX = KnightPos[0] - 1;
        let startY = KnightPos[1] - 1;
        let targetX = TargetPos[0] - 1;
        let targetY = TargetPos[1] - 1;

        // If the start and target positions are the same
        if (startX === targetX && startY === targetY) return 0;

        // Create a visited 2D array to track visited positions
        let visited = Array.from({ length: N }, () => Array(N).fill(false));

        // Queue to perform BFS
        let queue = [];
        queue.push([startX, startY, 0]);  // Start position with 0 steps
        visited[startX][startY] = true;

        // BFS Loop
        while (queue.length > 0) {
            let [x, y, steps] = queue.shift();

            // Try all 8 possible knight moves
            for (let [dx, dy] of moves) {
                let newX = x + dx;
                let newY = y + dy;

                // Check if the new position is within bounds and not visited
                if (newX >= 0 && newX < N && newY >= 0 && newY < N && !visited[newX][newY]) {
                    // If target is found, return the number of steps
                    if (newX === targetX && newY === targetY) {
                        return steps + 1;
                    }

                    // Mark as visited and add to queue
                    visited[newX][newY] = true;
                    queue.push([newX, newY, steps + 1]);
                }
            }
        }

        // If we exhaust the queue and never reach the target, return -1
        return -1;
    }
}
