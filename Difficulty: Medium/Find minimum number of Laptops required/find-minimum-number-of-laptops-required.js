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
        let start = (readLine()).trim().split(" ").map((x) => parseInt(x));
        let end = (readLine()).trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.minLaptops(N,start,end);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number} N
 * @param {number[]} start
 * @param {number[]} end
 * @returns {number}
 */

class Solution {
    // Function to find the minimum number of laptops that are needed.
    minLaptops(N, start, end) {
        // Sort the start and end times
        start.sort((a, b) => a - b);
        end.sort((a, b) => a - b);

        let laptopsInUse = 0; // Variable to track the number of laptops in use
        let maxLaptopsRequired = 0; // Variable to store the maximum number of laptops required at any time
        let i = 0, j = 0; // Indexes for the start and end times

        // Traverse through start and end times
        while (i < N) {
            if (start[i] < end[j]) {
                // A job starts before the previous one ends, need another laptop
                laptopsInUse++;
                maxLaptopsRequired = Math.max(maxLaptopsRequired, laptopsInUse);
                i++; // Move to the next start time
            } else {
                // A job has ended, so free up a laptop
                laptopsInUse--;
                j++; // Move to the next end time
            }
        }

        return maxLaptopsRequired; // Return the maximum number of laptops required
    }
}
