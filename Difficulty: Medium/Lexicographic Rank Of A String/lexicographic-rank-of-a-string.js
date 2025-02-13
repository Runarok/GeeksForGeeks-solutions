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
        let S = input_line[0];
        let obj = new Solution();
        let ans = obj.findRank(S);
        if(ans==-0)
            ans=0;
        console.log(ans);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} S
 * @returns {number}
*/

class Solution {
    // Function to find lexicographic rank of a string.
    findRank(S) {
        const MOD = 1000000007;
        let rank = 1;
        let n = S.length;
        let mul = this.factorial(n);
        
        // Count frequency of all characters
        let count = Array(256).fill(0);
        for (let i = 0; i < n; i++) {
            count[S.charCodeAt(i)]++;
        }
        
        // Check for duplicate characters
        for (let i = 0; i < 256; i++) {
            if (count[i] > 1) {
                return 0;  // Return 0 if there are duplicate characters
            }
        }
        
        // Compute the rank of the string
        for (let i = 0; i < n; i++) {
            mul = mul / (n - i);  // Adjust the factorial for remaining characters
            
            // Count characters smaller than S[i] from S[i+1] to S[n-1]
            let smaller = 0;
            for (let j = 0; j < S.charCodeAt(i); j++) {
                smaller += count[j];
            }
            
            // Update rank considering the smaller characters
            rank = (rank + smaller * mul) % MOD;
            
            // Reduce the count of current character
            count[S.charCodeAt(i)]--;
        }
        
        return rank;
    }
    
    // Function to calculate factorial
    factorial(n) {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}
