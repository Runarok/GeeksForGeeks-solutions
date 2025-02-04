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

        let n = parseInt(readLine());

        let x = parseInt(readLine());

        let y = parseInt(readLine());

        let obj = new Solution();
        let res = obj.findWinner(n, x, y);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    findWinner(n, x, y) {
        // Initialize a dp array where each index represents the possibility of winning for that position
        let dp = new Array(n + 1).fill(0);

        // Loop through positions from 0 to n-1
        for (let i = 0; i < n; i++) {
            // If current position is not yet visited (dp[i] is 0), mark the next positions as reachable
            if (dp[i] === 0) {
                // Mark the next position (i+1) as reachable
                dp[i + 1] = 1;

                // If jumping by x positions is within bounds, mark it as reachable
                if (i + x <= n) {
                    dp[i + x] = 1;
                }

                // If jumping by y positions is within bounds, mark it as reachable
                if (i + y <= n) {
                    dp[i + y] = 1;
                }
            }
        }

        // Return the final value for position n to determine the winner (1: winner, 0: not possible)
        return dp[n];
    }
}
