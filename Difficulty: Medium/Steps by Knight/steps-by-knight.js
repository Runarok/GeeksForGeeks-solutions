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
        let input_line = readLine().split(" ");
        let N = parseInt(input_line[0]);
        
        input_line = readLine().split(" ");
        let a = parseInt(input_line[0]);
        let b = parseInt(input_line[1]);
        
        input_line = readLine().split(" ");
        let c = parseInt(input_line[0]);
        let d = parseInt(input_line[1]);
    
        let KnightPos = new Array(a,b);
        let TargetPos = new Array(c,d); 

        let obj = new Solution();
        let ans = obj.minStepToReachTarget(KnightPos, TargetPos, N);
        if(ans==-0)
            ans=0;
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends

class Solution {
    // Function to find out minimum steps Knight needs to reach target position.
    minStepToReachTarget(KnightPos, TargetPos, N) {
        // Adjusting positions to be 0-indexed
        let src_x = KnightPos[1] - 1;
        let src_y = KnightPos[0] - 1;
        let tar_x = TargetPos[1] - 1;
        let tar_y = TargetPos[0] - 1;
        
        return this.solve(src_x, src_y, tar_x, tar_y, N);
    }

    solve(srcX, srcY, tarX, tarY, N) {
        // Possible knight moves (8 directions)
        const cordinates = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]];
        const visited = Array.from({ length: N }, () => new Array(N).fill(false)); // visited array to track visited positions
        const queue = [[srcX, srcY]]; // Initialize queue with the starting position
        visited[srcX][srcY] = true; // Mark the start position as visited
        let steps = 0;

        // BFS loop
        while (queue.length > 0) {
            let size = queue.length;

            while (size > 0) {
                const [x, y] = queue.shift(); // Dequeue the next position

                // If the current position is the target, return the number of steps
                if (x === tarX && y === tarY) {
                    return steps;
                }

                // Check all possible knight moves
                for (let [dx, dy] of cordinates) {
                    let newX = x + dx;
                    let newY = y + dy;

                    // Check if the new position is valid and hasn't been visited
                    if (newX >= 0 && newX < N && newY >= 0 && newY < N && !visited[newX][newY]) {
                        queue.push([newX, newY]);
                        visited[newX][newY] = true; // Mark the new position as visited
                    }
                }
                size--;
            }
            steps++; // Increment steps after processing one level
        }

        return -1; // If the target is unreachable, return -1
    }
}
