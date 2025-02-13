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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let k = input_ar1[1];
        let s = readLine();
        let obj = new Solution();
        let res = obj.kPalindrome(s, n, k);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} s
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    // Function to calculate the length of longest common subsequence between s and its reverse
    lcs(s, rev, n) {
        // Initialize the dp array with dimensions (n+1) x (n+1) and fill it with 0s
        let dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
        
        // Loop through the strings and fill the dp table
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (s[i - 1] === rev[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1; // If characters match, increment the subsequence length
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Otherwise, take the max value from previous results
                }
            }
        }
        // Return the length of longest common subsequence
        return dp[n][n];
    }

    // Function to check if the string can become a palindrome by removing at most k characters
    kPalindrome(s, n, k) {
        // Reverse the string
        let rev = s.split("").reverse().join("");
        // Calculate the longest palindromic subsequence
        let lps = this.lcs(s, rev, n);
        // If the difference between string length and longest palindromic subsequence is less than or equal to k, return 1 (true)
        return n - lps <= k ? 1 : 0;
    }
}
