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
        let S = readLine().trim();
        let obj = new Solution();
        let res = obj.divisibleBy11(S);
        console.log(res?1:0);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
     * Function to check if a number is divisible by 11.
     * @param {string} S the input number as a string.
     * @returns {boolean} returns 1 if divisible by 11, otherwise 0.
     */
    divisibleBy11(S) {
        let num = BigInt(S);  // Convert string to BigInt for handling large numbers.
        if (num % 11n === 0n) {  // Check divisibility by 11.
            return 1;  // Return 1 if divisible by 11.
        }
        return 0;  // Return 0 if not divisible by 11.
    }
}
