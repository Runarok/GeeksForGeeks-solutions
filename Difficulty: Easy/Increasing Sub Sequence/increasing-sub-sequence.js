//{ Driver Code Starts
// Initial Template for javascript
'use strict';

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
    let i = 0;
    for (; i < t; i++) {
        let S = (readLine().trim());
        let obj = new Solution();
        let res = obj.maxLength(S);
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} S
 * @returns {number}
*/

class Solution {
    // Function to find the maximum length of consecutive characters in a string.
    maxLength(S) {
        // Return 0 if the string is empty
        if (S.length == 0) {
            return 0;
        }

        // Get the length of the string
        let n = S.length;
        
        // Create an array to store the length of the longest increasing subsequence
        let dp = new Array(n).fill(1);

        // Loop through the string and calculate the longest increasing subsequence length
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (S[i] > S[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }

        // Return the maximum value from the dp array, which gives the length of the longest subsequence
        return Math.max(...dp);
    }
}
