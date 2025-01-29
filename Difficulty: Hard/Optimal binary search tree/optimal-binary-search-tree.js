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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let keys = new Array(n);
        let freq = new Array(n);
        let input1 = readLine().split(" ").map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            keys[i] = input1[i];
        }
        let input2 = readLine().split(" ").map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            freq[i] = input2[i];
        }
        let obj = new Solution();
        let res = obj.optimalSearchTree(keys, freq, n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[]} keys
 * @param {number[]} freq
 * @param {number} n
 * @returns {number}
 */

class Solution {
    // Function to count the number of ways to reach the nth stair.
    recur(i, j, freq, dp) {
        // Base case: if i > j, there are no keys to consider
        if(i > j) return 0;
        
        // If we've already computed the result for this subproblem, return it
        if(dp[i][j] != -1) return dp[i][j];
        
        // Base case: if i == j, there's only one key, so the cost is just its frequency
        if(i === j) {
            dp[i][j] = freq[i];
            return freq[i];
        }

        // Calculate the total frequency of keys in the range [i, j]
        let totalFreq = 0;
        for(let k = i; k <= j; k++) {
            totalFreq += freq[k];
        }

        // Now, we need to find the key that minimizes the cost of the search tree
        let minFreq = Number.MAX_VALUE;
        
        // Try every key from i to j as the root, and compute the cost
        for(let k = i; k <= j; k++) {
            // Cost of having k as the root is the sum of:
            // - the cost of the left subtree (keys from i to k-1)
            // - the frequency of all keys in the current range (because each key gets accessed once)
            // - the cost of the right subtree (keys from k+1 to j)
            let temp = this.recur(i, k - 1, freq, dp) + totalFreq + this.recur(k + 1, j, freq, dp);
            
            // Track the minimum cost
            if(temp < minFreq) minFreq = temp;
        }

        // Store the result in dp table to avoid recalculating
        dp[i][j] = minFreq;
        return dp[i][j];
    }

    optimalSearchTree(keys, freq, n) {
        // Initialize a 2D dp array with -1 (indicating that no subproblem has been solved yet)
        let dp = [];
        for(let i = 0; i < n; i++) {
            dp.push([]);
            for(let j = 0; j < n; j++) {
                dp[i].push(-1);
            }
        }

        // Call the recursive function to compute the result
        return this.recur(0, n - 1, freq, dp);
    }
}
