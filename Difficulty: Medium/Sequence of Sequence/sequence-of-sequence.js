//{ Driver Code Starts
// Position this line where user code will be pasted.

const readline = require("readline");

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];
rl.on("line", (line) => { input.push(line); }).on("close", () => {
    let t = parseInt(input[0]);
    let index = 1;

    while (t--) {
        let n = parseInt(input[index++]);
        let m = parseInt(input[index++]);

        let ob = new Solution();
        console.log(ob.numberSequence(n, m));
        console.log("~");
    }
});

// } Driver Code Ends


class Solution {
    numberSequence(n, m) {
        // dp[i][x] will store the number of sequences of length i that end with x
        let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
        
        // Initialize base case for length 1
        for (let x = 1; x <= m; x++) {
            dp[1][x] = 1;
        }
        
        // Fill the dp table for sequences of length 2 to n
        for (let i = 2; i <= n; i++) {
            for (let x = 1; x <= m; x++) {
                // Find valid values for the previous element of the sequence
                for (let prev = 1; prev <= x / 2; prev++) {
                    dp[i][x] += dp[i - 1][prev];
                }
            }
        }
        
        // Sum the number of sequences of length n for all values from 1 to m
        let result = 0;
        for (let x = 1; x <= m; x++) {
            result += dp[n][x];
        }
        
        return result;
    }
}
