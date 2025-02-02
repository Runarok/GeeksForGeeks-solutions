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
        let res = obj.checkFibonacci(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} N
 * @return {string}
 */

class Solution {
    // Function to check if a number N is a Fibonacci number
    checkFibonacci(N){
        // Initialize the first two numbers in the Fibonacci sequence
        let a = 0; 
        let b = 1; 
        
        // Loop to generate Fibonacci numbers until we exceed N
        while (a <= N) {
            // If N is found in the sequence, return "Yes"
            if (a === N) {
                return "Yes"; 
            }
            
            // Update a and b to the next numbers in the Fibonacci sequence
            let ans = a + b;
            a = b;
            b = ans;
        }
        
        // If N is not found in the sequence, return "No"
        return "No"; 
    }
}
