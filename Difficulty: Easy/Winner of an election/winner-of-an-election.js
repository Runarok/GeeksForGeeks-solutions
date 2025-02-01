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
        let n = parseInt(input_line[0]);
        
        let arr = new Array(n);
        
        input_line = readLine().split(' ');
        for(let i=0;i<n;i++)
        {
            arr[i] = input_line[i];
        }
        
        let obj = new Solution();
        
        let ans = obj.winner(arr, n);
        console.log(ans[0] + " " + ans[1]);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string[]} arr
 * @param {number} n
 * @returns {string[]}
*/


class Solution {
    // Function to return the name of the candidate that received maximum votes
    winner(arr, n) {
        // Initialize an object to store vote counts and a variable for the maximum votes
        const map = {};
        let max = 0;

        // Count the votes for each candidate
        for (let i = 0; i < n; i++) {
            if (!map[arr[i]]) {
                map[arr[i]] = 1;  // First occurrence of the candidate
            } else {
                map[arr[i]]++;  // Increment vote count for the candidate
            }
            // Keep track of the maximum votes
            max = Math.max(max, map[arr[i]]);
        }

        let result = '';  // Variable to store the candidate with max votes

        // Find the candidate(s) with the maximum votes
        for (let i in map) {
            if (map[i] === max) {
                // If multiple candidates have the same max votes, pick the lexicographically smaller one
                result = result ? (result > i ? i : result) : i;
            }
        }

        // Return the result as an array with the candidate's name and their vote count
        return [result, max];
    }
}
