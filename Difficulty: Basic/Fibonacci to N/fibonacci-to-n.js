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
    for(; i<t; i++)
    {
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.nFibonacci(N);
        let s = "";
        for(let it of res){
            s+=it+" ";
        }
        console.log(s);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * Function to generate Fibonacci numbers less than or equal to N.
 * @param {number} N - The upper limit for Fibonacci numbers
 * @returns {number[]} - An array of Fibonacci numbers less than or equal to N
 */
class Solution {
    nFibonacci(N) {
        // Initialize the Fibonacci sequence with the first two numbers
        let ans = [0, 1];
        
        // Start calculating the next Fibonacci numbers
        let i = 2;
        let nextFib;
        
        // Continue calculating Fibonacci numbers until the next number exceeds N
        while(true) {
            nextFib = ans[ans.length - 1] + ans[ans.length - 2]; // Sum of the last two numbers in the sequence
            
            // If the next Fibonacci number exceeds N, return the current sequence
            if (nextFib > N) return ans;
            
            // Add the new Fibonacci number to the sequence
            ans.push(nextFib);
        }
        
        // Return the Fibonacci sequence (though it will return earlier from the loop)
        return ans;
    }
}
