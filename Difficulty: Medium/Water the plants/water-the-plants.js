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
        let gallery = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            gallery[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.min_sprinklers(gallery, n));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} gallery - Array representing the sprinklers and their ranges.
 * @param {number} n - Total number of gallery positions.
 * @returns {number} - Minimum number of sprinklers required to cover the entire gallery.
 */
class Solution {
    
    min_sprinklers(gallery, n) {
        const sprinklerRanges = [];

        // Collect valid sprinkler coverage ranges
        for (let i = 0; i < n; i++) {
            if (gallery[i] !== -1) {
                const leftCoverage = Math.max(0, i - gallery[i]); // Leftmost position it can cover
                const rightCoverage = Math.min(n - 1, i + gallery[i]); // Rightmost position it can cover
                sprinklerRanges.push([leftCoverage, rightCoverage]);
            }
        }

        // Sort sprinklers by their left coverage position
        sprinklerRanges.sort((a, b) => a[0] - b[0]);

        let sprinklersUsed = 0; // Count of sprinklers turned on
        let targetPosition = 0; // Position we need to cover next
        let i = 0; // Index in sprinklerRanges

        while (targetPosition < n) {
            let maxCoverage = -1;

            // Find the sprinkler that can extend coverage from the current target position
            while (i < sprinklerRanges.length) {
                if (sprinklerRanges[i][0] <= targetPosition) {
                    maxCoverage = Math.max(maxCoverage, sprinklerRanges[i][1]);
                    i++;
                } else {
                    break;
                }
            }

            // If no sprinkler can extend coverage, return -1 (impossible to cover all positions)
            if (maxCoverage < targetPosition) return -1;

            // Move the target position to the next uncovered position
            targetPosition = maxCoverage + 1;
            sprinklersUsed++;
        }

        return sprinklersUsed;
    }
}
