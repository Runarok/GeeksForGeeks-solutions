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
        let res=obj.findMaxLen(S);
        console.log(res);
    
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} S
 * @return {number}
*/

class Solution {
    
    findMaxLen(S){
        // Initialize counters for left and right parentheses
        let left = 0;
        let right = 0;
        let max = 0;  // Variable to keep track of the maximum length of valid parentheses

        // First loop: Traverse the string from left to right
        for(let i = 0; i < S.length; i++){
            let ch = S[i];  // Current character

            // Increment left for '(' and right for ')'
            if(ch === '('){
                left++;
            } else {
                right++;
            }

            // If the number of left and right parentheses are equal, update the maximum length
            if(left === right){
                max = Math.max(max, left * 2);
            }

            // If right parentheses exceed left parentheses, reset the counters
            if(right > left){
                left = 0;
                right = 0;
            }
        }
        
        // Reset the counters for a second pass from right to left
        left = 0;
        right = 0;

        // Second loop: Traverse the string from right to left
        for(let i = S.length - 1; i >= 0; i--){
            let ch = S[i];  // Current character

            // Increment left for '(' and right for ')'
            if(ch === '('){
                left++;
            } else {
                right++;
            }

            // If the number of left and right parentheses are equal, update the maximum length
            if(left === right){
                max = Math.max(max, left * 2);
            }

            // If left parentheses exceed right parentheses, reset the counters
            if(left > right){
                left = 0;
                right = 0;
            }
        }
        
        // Return the maximum length of valid parentheses found
        return max;
    }
}
