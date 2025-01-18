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
        let str = readLine();
        let obj = new Solution();
        let res = obj.countMin(str);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript



/**
 * @param {string} str
 * @returns {number}
*/

class Solution {
    countMin(str) {
        const n = str.length;
        
        // Create a 2D DP array
        let dp = Array.from({ length: n }, () => Array(n).fill(0));
        
        // Base case: single character is always a palindrome of length 1
        for (let i = 0; i < n; i++) {
            dp[i][i] = 1;
        }

        // Fill the DP table
        for (let length = 2; length <= n; length++) {
            for (let i = 0; i <= n - length; i++) {
                let j = i + length - 1;
                
                if (str[i] === str[j]) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }

        // The longest palindromic subsequence length is dp[0][n-1]
        const lpsLength = dp[0][n - 1];

        // Minimum insertions needed
        return n - lpsLength;
    }
}

