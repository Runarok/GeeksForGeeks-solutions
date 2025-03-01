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
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.minDeletions(arr, n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
    minDeletions(arr, n) {
        // Initialize an array to store the length of the longest increasing subsequence (LIS) ending at each index
        let dp = [];
        
        // The first element always forms an increasing subsequence of length 1
        dp[0] = 1;
        
        // Variable to store the maximum length of increasing subsequence found so far
        let ans = 1;
        
        // Loop through the array starting from the second element
        for (let i = 1; i < n; i++) {
            dp[i] = 1; // Initialize LIS length at each index to 1
            // Check all previous elements to find the longest increasing subsequence ending at index i
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] < arr[i]) {
                    // Update dp[i] if a longer subsequence is found
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            // Update the maximum LIS length
            ans = Math.max(ans, dp[i]);
        }
        
        // The result is the number of deletions needed to get the longest increasing subsequence
        return n - ans;
    }
}
