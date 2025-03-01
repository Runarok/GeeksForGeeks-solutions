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
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        let hi = new Array(n);
        input_line = readLine().split(' ');
        for(let i=0;i<n;i++)
        {
            hi[i] = parseInt(input_line[i]);
        }
        
        let li = new Array(n);
        input_line = readLine().split(' ');
        for(let i=0;i<n;i++)
        {
            li[i] = parseInt(input_line[i]);
        }
        
        let obj = new Solution();
        let ans = obj.maxAmt(n, hi, li);
        if(ans==-0n)
            ans=0n;
        console.log(ans.toString());
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number[]} hi
 * @param {number[]} li
 * @returns {number}
*/

class Solution {
    // Function to calculate the maximum amount
    maxAmt(n, hi, li) {
        // Base case: if n is 1, return the maximum of the first elements in hi and li
        if (n == 1) {
            return Math.max(hi[0], li[0]);
        }

        // Create a dp array to store the maximum amount at each index
        let dp = new Array(n).fill(0);
        
        // Initialize the dp array with the maximum value for the first two elements
        dp[0] = Math.max(hi[0], li[0]);  // The maximum for the first index
        dp[1] = Math.max(li[0] + li[1], hi[0] + li[1], hi[1]);  // The maximum for the second index

        // Iterate through the remaining elements
        for (let i = 2; i < n; i++) {
            // Calculate the maximum amount for the current index
            dp[i] = Math.max(dp[i - 2] + hi[i], dp[i - 1] + li[i]);
        }

        // Return the maximum amount for the last index
        return dp[n - 1];
    }
}
