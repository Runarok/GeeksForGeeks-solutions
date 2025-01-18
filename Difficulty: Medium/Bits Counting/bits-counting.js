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

        let obj = new Solution();
        let res = obj.countBits(n);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
        console.log("~");
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param {number} n
    * @returns {number[]}
    */
    countBits(n) {
        // Initialize an array dp of size n+1 with 0 values
        const dp = new Array(n + 1).fill(0);
        
        // Loop to compute the number of 1's for each number from 0 to n
        for (let i = 1; i <= n; i++) {
            // dp[i] = dp[i >> 1] + (i & 1)
            dp[i] = dp[i >> 1] + (i & 1);
        }
        
        return dp;
    }
}
