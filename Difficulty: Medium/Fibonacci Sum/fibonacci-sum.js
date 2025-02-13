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
        let obj = new Solution();
        let res = obj.fib(n);
        console.log(res);
        
    }
}// } Driver Code Ends


// } Driver Code Ends

class Solution{
    /**
     * @param {number} n
     * @returns {number}
     */
    fib(n) {
        // Constant to hold the modulus value
        const data = 1000000007;

        // Base case for Fibonacci sequence
        if (n === 0) return 0;
        if (n === 1) return 1;

        // Initialize variables to hold the previous two Fibonacci numbers
        let sum = 1; // Starting sum
        let a = 0;   // First Fibonacci number
        let b = 1;   // Second Fibonacci number

        // Loop to calculate the Fibonacci sequence and keep the sum
        for (let i = 2; i <= n; i++) {
            let c = (a + b) % data;  // Current Fibonacci number mod data
            sum = (sum + c) % data;  // Update the sum with the current Fibonacci number
            a = b;                   // Move to the next Fibonacci numbers
            b = c;
        }

        return sum; // Return the final sum mod data
    }
}
