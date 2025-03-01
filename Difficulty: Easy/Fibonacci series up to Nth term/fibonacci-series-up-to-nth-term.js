//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++){
        
        let n = parseInt(readLine());
        
        let obj = new Solution();
        let res = obj.Series(n);
        
        let S_res = '';
        for(let i=0;i<res.length;i++)
        {
            S_res+=(res[i]);
            S_res+=' ';
        }
        console.log(S_res);
        
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param {number} n
    * @returns {number[]}
    */
    Series(n) {
        // Code to generate the series of Fibonacci numbers up to n, modulo 10^9+7
        const MOD = 1000000007;
        
        // Memoization array to store already computed Fibonacci values
        let memo = new Array(n + 1).fill(-1);
        
        // Function to compute the Fibonacci number using memoization
        function fib(i) {
            // Base cases: Fibonacci of 0 is 0, and Fibonacci of 1 is 1
            if (i === 0 || i === 1) {
                return i;
            }
            
            // If the value is already computed, return it from memo array
            if (memo[i] !== -1) return memo[i];
            
            // Compute Fibonacci and store it in memo for future use
            return memo[i] = (fib(i - 1) + fib(i - 2)) % MOD;
        }
        
        // Generate the result array by calling fib function for all numbers from 0 to n
        let result = [];
        for (let i = 0; i <= n; i++) {
            result.push(fib(i));
        }
        
        // Return the complete series of Fibonacci numbers modulo 10^9+7
        return result;
    }
}
