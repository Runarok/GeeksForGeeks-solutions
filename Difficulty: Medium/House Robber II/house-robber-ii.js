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

        let input_arr = readLine().split(' ').map(x => parseInt(x));
        let n = input_arr.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_arr[i];
        }

        let obj = new Solution();
        let res = obj.maxValue(arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param {number[]} arr - Input array
    * @returns {number} - Maximum value following the given constraints
    */

    // Recursive helper function with memoization
    helper(idx, end, arr, dp) {
        if (idx < end) return 0; // Base case: stop when index goes out of bounds

        if (dp[idx][end] !== -1) return dp[idx][end]; // Return cached result if available

        // Option 1: Pick the current element and skip the next one
        let pick = arr[idx] + this.helper(idx - 2, end, arr, dp);

        // Option 2: Skip the current element
        let nonPick = this.helper(idx - 1, end, arr, dp);

        // Store and return the maximum of both choices
        return (dp[idx][end] = Math.max(pick, nonPick));
    }

    maxValue(arr) {
        let dp = new Array(arr.length);
        for (let i = 0; i < arr.length; i++) {
            dp[i] = Array(2).fill(-1); // Initialize DP table with -1
        }

        // Try starting from either the last or second last element
        return Math.max(
            this.helper(arr.length - 1, 1, arr, dp),
            this.helper(arr.length - 2, 0, arr, dp)
        );
    }
}
