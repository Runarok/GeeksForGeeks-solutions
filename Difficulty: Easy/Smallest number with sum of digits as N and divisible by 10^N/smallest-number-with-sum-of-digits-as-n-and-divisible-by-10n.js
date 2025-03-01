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
        let N = input_line[0];
        let obj = new Solution();
        let ans = obj.digitsNum(N);
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Function to construct the smallest number with digit sum N and divisible by 10^N.
    digitsNum(N) {
        // Initialize an empty string to store the final result.
        let result = '';
        
        // Add N zeros at the end of the number to make it divisible by 10^N.
        for (let i = 0; i < N; i++) {
            result += '0';
        }
        
        // Construct the number such that its digit sum is exactly N.
        // Start by using as many '9's as possible, as '9' contributes the maximum to the sum.
        while (N >= 9) {
            result = '9' + result;
            N -= 9;
        }
        
        // If some sum is left (N < 9), place that digit at the beginning.
        if (N > 0) {
            result = N.toString() + result;
        }
        
        // Return the final constructed number as a string.
        return result;
    }
}
