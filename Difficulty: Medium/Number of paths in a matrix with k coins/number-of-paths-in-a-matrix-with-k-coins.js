//{ Driver Code Starts

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
        
        let k = parseInt(readLine());
        
        
        let n = parseInt(readLine());
        
        let arr = [];
        let input_line1 = readLine().trim().split(/\s+/);
        let c = 0;
        for (let i = 0; i < n; i++) {
            arr[i] = [];
            for (let j = 0; j < n; j++) {
                arr[i][j] = parseInt(input_line1[c]);
                c++;
            }
        }

        
        let obj = new Solution();
        let res = obj.numberOfPath(n, k, arr);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    constructor() {
        this.memo = new Map();
    }

    numberOfPath(n, k, grid) {
        return this.findPaths(0, 0, n, k, grid);
    }

    findPaths(row, col, size, remaining, grid) {
        // If remaining sum goes negative, no valid path
        if (remaining < 0) {
            return 0;
        }

        // Check if the result is already computed for the current state
        const key = `${row},${col},${remaining}`;
        if (this.memo.has(key)) {
            return this.memo.get(key);
        }

        // If we reached the bottom-right corner
        if (row === size - 1 && col === size - 1) {
            // Check if the current cell value matches the remaining sum
            if (remaining - grid[row][col] === 0) {
                return 1;
            }
            return 0;
        }

        // If out of bounds, no valid path
        if (row >= size || col >= size) {
            return 0;
        }

        // Explore the path by moving right and down
        const moveRight = this.findPaths(row, col + 1, size, remaining - grid[row][col], grid);
        const moveDown = this.findPaths(row + 1, col, size, remaining - grid[row][col], grid);

        // Store the result for the current state
        this.memo.set(key, moveRight + moveDown);
        return moveRight + moveDown;
    }
}
