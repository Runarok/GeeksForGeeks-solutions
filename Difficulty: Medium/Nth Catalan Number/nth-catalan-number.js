//{ Driver Code Starts
// Initial Template for javascript

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let n = parseInt(readLine());
        let obj = new Solution();
        let ans = obj.findCatalan(n);
        console.log(ans);

        console.log("~");
    }
}

// Position this line where user code will be pasted.

// } Driver Code Ends


// User function Template for JavaScript
class Solution {
    /**
     * Function to find the nth Catalan number using dynamic programming.
     * @param {number} n - The number for which we need to find the Catalan number.
     * @returns {number} - The nth Catalan number.
     */
    findCatalan(n) {
        // DP array to store computed Catalan numbers
        let dp = new Array(n + 1).fill(0);
        
        // Base cases: C(0) = 1, C(1) = 1
        dp[0] = dp[1] = 1;
    
        // Compute Catalan numbers from C(2) to C(n)
        for (let i = 2; i <= n; i++) {
            // j represents the root node position
            for (let j = 1; j <= i; j++) {
                // Formula: C(n) = Σ C(j-1) * C(i-j) for all j from 1 to i
                dp[i] += dp[j - 1] * dp[i - j];
            }
        }
    
        return dp[n]; // Return the nth Catalan number
    }
}
