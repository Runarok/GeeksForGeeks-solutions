//{ Driver Code Starts
//Initial Template for javascript

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
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let A = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            A[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.minAmount(A,n));
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[]} A
 * @param {number} n
 * @returns {number}
*/

class Solution {
    // Function to find the minimum amount that you have to pay
    minAmount(A, n) {
        // Prepend a 0 to the array for convenience in indexing
        A = [0, ...A];

        // Recursive helper function to calculate the minimum cost
        function fun(i) {
            if (i >= A.length) return 0;  // Base case: If index exceeds length, return 0
            if (dp[i] != 0) return dp[i];  // If the value is already calculated, return it
            
            // Calculate the minimum amount to pay by considering the next steps
            let a1 = 0;
            a1 = A[i] + Math.min(fun(i + 1), fun(i + 2));  // Either move 1 step or 2 steps
            
            // Store the result in dp to avoid recalculating
            return dp[i] = a1;
        }

        // Initialize dp array to store the results of subproblems
        let dp = new Array(A.length).fill(0);

        // Start the calculation from the first index (0th)
        return fun(0);
    }
}
