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
        let n = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.nthFibonacci(n));

        console.log("~");
    }
}

// } Driver Code Ends

// User-defined function Template for JavaScript  

/**  
 * Computes the Nth Fibonacci number.  
 * @param {number} num - The position of the Fibonacci number to find  
 * @returns {number} - The Nth Fibonacci number  
 */  

class Solution {  
    nthFibonacci(num) {  
        // Base cases for Fibonacci sequence  
        if (num == 0) {  
            return 0;  
        }  
        if (num == 1) {  
            return 1;  
        }  
        if (num == 2) {  
            return 1;  
        }  

        // Variables to store previous two Fibonacci numbers  
        var firstPrev = 1;  
        var secondPrev = 1;  
        var fibNum = 0;  

        // Loop to calculate Fibonacci number iteratively  
        for (var i = 3; i <= num; i++) {  
            fibNum = firstPrev + secondPrev;  
            firstPrev = secondPrev;  
            secondPrev = fibNum;  
        }  

        // Return the Nth Fibonacci number  
        return secondPrev;  
    }  
}  
