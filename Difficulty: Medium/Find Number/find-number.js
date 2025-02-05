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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.findNumber(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

/**
 * Function to find the N-th number in a sequence where the numbers are formed by mapping
 * numbers in base 5 to a sequence of odd numbers: 1, 3, 5, 7, 9, ...
 *
 * @param {number} N - The position of the number in the sequence.
 * @returns {number} - The N-th number in the sequence.
 */

class Solution {
    findNumber(N) {
        let result = ""; // Initialize an empty string to build the result
        
        // Loop until N is greater than 0
        while (N > 0) {
            // Find the remainder when (N - 1) is divided by 5 (this gives us base 5 digits)
            let digit = (N - 1) % 5;

            // Map the base 5 digit [0,1,2,3,4] to [1,3,5,7,9]
            result = (digit * 2 + 1) + result;

            // Reduce N by dividing by 5 and adjusting for the mapping
            N = Math.floor((N - 1) / 5);
        }
        
        // Return the final result as an integer after forming the sequence
        return parseInt(result);
    }
}
