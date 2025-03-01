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
    let i = 0;
    for(;i<t;i++)
    {
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.getNthPell(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
     * @param {number} N
     * @returns {number}
     */

    // Function to calculate the Nth Pell number
    getNthPell(N) {
        const MOD = 1000000007;
        let p1 = 0; // First Pell number
        let p2 = 1; // Second Pell number
        let i = 1;

        // Iterate until the Nth Pell number is reached
        while (i < N) {
            // Calculate the next Pell number using the recurrence relation
            const v = 2 * p2 + p1;

            // Update previous Pell numbers with modulo to avoid overflow
            p1 = p2 % MOD;
            p2 = v % MOD;

            i++;
        }

        // Return the Nth Pell number
        return p2;
    }
}
