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

        let w = parseInt(readLine());

        let cost = new Array(n);
        let input_cost = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            cost[i] = input_cost[i];
        }

        let obj = new Solution();
        let res = obj.minimumCost(n, w, cost);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    /**
     * @param {number} n - Number of different weights available
     * @param {number} w - Target weight to be achieved
     * @param {number[]} cost - Array representing the cost of each weight (1-based index)
     * @returns {number} - Minimum cost to achieve exactly 'w' weight
     */
    
    helper(idx, cost, w, dp) {
        // Base cases
        if (w === 0) return 0;  // If target weight is achieved, cost is 0
        if (idx >= cost.length || w < 0) return -1;  // If out of bounds or negative weight, return -1
        
        // If already computed, return stored value
        if (dp[idx][w] !== -2) return dp[idx][w];

        let pick = -1;

        // If the current weight index has a valid cost, consider picking it
        if (cost[idx] !== -1) {
            let temp = this.helper(idx, cost, w - (idx + 1), dp);
            if (temp !== -1) {
                pick = cost[idx] + temp;
            }
        } 
        
        // Case where we do not pick the current weight
        let nonPick = this.helper(idx + 1, cost, w, dp);
        
        // Determine the minimum valid cost among both choices
        if (pick === -1 && nonPick === -1) return dp[idx][w] = -1;
        else if (pick !== -1 && nonPick !== -1) return dp[idx][w] = Math.min(pick, nonPick);
        else if (pick === -1) return dp[idx][w] = nonPick;
        else return dp[idx][w] = pick;
    }

    minimumCost(n, w, cost) {
        // Initialize DP table with -2 (uncomputed state)
        let dp = Array(n).fill(null).map(() => Array(w + 1).fill(-2));
        return this.helper(0, cost, w, dp);
    }
}
