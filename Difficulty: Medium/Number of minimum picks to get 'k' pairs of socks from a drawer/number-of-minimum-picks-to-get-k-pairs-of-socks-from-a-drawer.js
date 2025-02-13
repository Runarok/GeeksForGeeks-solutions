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
        let n = parseInt(readLine());
        let a = readLine().trim().split(" ").map((x) => parseInt(x));
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.find_min(a,n,k);
        if(res === -0)
            res = 0;
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} sockCounts - Array representing the count of each sock type
 * @param {number} totalTypes - Total number of different sock types
 * @param {number} requiredPairs - Number of sock pairs needed
 * @return {number}
 */

class Solution {
    find_min(sockCounts, totalTypes, requiredPairs) {
        // Initialize the minimum number of sock picks needed
        let minPicks = totalTypes;
        
        // Count of pairs collected so far
        let collectedPairs = 0;

        // First pass: Collect pairs by reducing available socks
        for (let i = 0; collectedPairs < requiredPairs && i < totalTypes; i++) {
            sockCounts[i]--; // Take one sock to start
            
            // Extract as many pairs as possible from the remaining socks
            while (sockCounts[i] >= 2) {
                collectedPairs++;
                
                // If we have collected enough pairs, return result
                if (collectedPairs === requiredPairs) {
                    return minPicks + 1;
                }
                
                minPicks += 2; // Two socks used to form a pair
                sockCounts[i] -= 2;
            }
        }

        // Second pass: Pick single socks to complete pairs if needed
        for (let i = 0; collectedPairs < requiredPairs && i < totalTypes; i++) {
            if (sockCounts[i] > 0) {
                collectedPairs++;
                minPicks++;
            }
        }

        // Return the result if we managed to get the required pairs, otherwise return -1
        return collectedPairs === requiredPairs ? minPicks : -1;
    }
}
