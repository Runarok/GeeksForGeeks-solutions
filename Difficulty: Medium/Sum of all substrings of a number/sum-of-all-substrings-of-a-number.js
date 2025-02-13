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
        let s = input_line[0];
        
        let obj = new Solution();
        let ans = obj.sumSubstrings(s);
        if(ans==-0n)
            ans=0n;
        console.log(ans.toString());
    
console.log("~");
}
}

// } Driver Code Ends

class Solution 
{
    // Function to find the sum of all possible substrings of the given string.
    sumSubstrings(s) 
    {
        // Array to store cumulative sum till the ith index.
        let dp = new Array(s.length);
        
        // Initialize first element with the integer value of the first character.
        dp[0] = BigInt(s[0]);
        
        let result = BigInt(0);
        const MOD = BigInt(1000000007);
        
        // Store the initial value in the result.
        result = dp[0];
        
        // Iterating over all digits in the string.
        for (let i = 1; i < s.length; i++) 
        {
            // Get the integer value of the current digit from the string.
            let currentDigit = BigInt(s[i]);   
            
            // Compute sum for the current index: (current digit * (i+1) + dp[i-1] * 10) % MOD.
            dp[i] = ((BigInt(i + 1) * currentDigit) % MOD + (dp[i - 1] * BigInt(10)) % MOD) % MOD;
            
            // Accumulate the sum.
            result = (result + dp[i]) % MOD;                            
        }
        
        // Return the final result.
        return result;
    }
}
