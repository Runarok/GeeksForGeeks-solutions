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
        let S = readLine();
        let P = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.getMinimumDays(N, S, P);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} N
 * @param {string} S
 * @param {number[]} P
 * @returns {number}
 */

class Solution {
    // Function to get the minimum number of days to complete all the projects.
    getMinimumDays(N, S, P) {
        // Initialize a variable to track the number of days
        let days = 0;

        // Convert the string S to an array for easier manipulation
        S = S.split('');
        
        // Iterate through the string to identify consecutive identical projects
        for (let i = 1; i < N; i++) {
            // Check if the current project is not a placeholder '?' and is the same as the previous project
            if (S[i] !== '?' && S[i] === S[i - 1]) {
                // If the condition is met, mark the project at position P[days] as completed by replacing it with '?'
                S[P[days++]] = '?';
                // Move the index back one position to check the previous project again after modification
                i--;
            }
        }
        
        // Return the number of days required to complete the projects
        return days;
    }
}
