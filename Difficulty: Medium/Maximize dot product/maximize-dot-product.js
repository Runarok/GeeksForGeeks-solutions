//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

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
        let nd = readLine().split(' ').map(Number);
        let n = nd[0];
        let m = nd[1];

        let a = [];
        let input_arr = readLine().split(' ').map(Number);
        for (let j = 0; j < n; j++) {
            a[j] = input_arr[j];
        }
        let b = [];
        let input_ar = readLine().split(' ').map(Number);
        for (let j = 0; j < m; j++) {
            b[j] = input_ar[j];
        }

        let obj = new Solution();
        let res = obj.maxDotProduct(n, m, a, b);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @param {number} m
 *  @param {number[]} a
 *  @param {number[]} b
 * @return {number}
 */
class Solution {
    maxDotProduct(n, m, a, b) {
        const dp = Array(n).fill().map(() => Array(m).fill(0));  // Initialize dp table with 0
        return solve(0, 0, a, b, dp);  // Start solving from the first elements of a and b
    }
}

// Helper function to compute the maximum dot product
function solve(i, j, a, b, dp) {
    // Base case: If we have exhausted either array or can't form a pair anymore
    if (j === b.length || (a.length - i) < (b.length - j)) return 0;

    // If the result is already computed for this subproblem, return it
    if (dp[i][j] > 0) return dp[i][j];

    // Recursive case: either take the current pair or skip the current element of 'a'
    dp[i][j] = Math.max(a[i] * b[j] + solve(i + 1, j + 1, a, b, dp), solve(i + 1, j, a, b, dp));
    
    return dp[i][j];  // Return the computed value
}
