//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.distinctPairs(arr, k);
        if (res.length === 0) {
            process.stdout.write('[]\n');
        }
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[i].length; j++) {
                process.stdout.write(res[i][j] + ' ');
            }
            process.stdout.write('\n');
        }
        process.stdout.write('~\n');
    }
}

// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    /**
     * @param {number[]} arr
     * @param {number} target
     * @return {number[][]}
     */
    distinctPairs(arr, target) {
        // Set to track elements already encountered in the array
        const seen = new Set();
        
        // Set to store unique pairs in a string format
        const uniquePairs = new Set();
        
        // Array to hold the result pairs
        const result = [];

        // Loop through each element in the array
        for (const num of arr) {
            // Calculate the complement (target - num) that would sum to the target
            const complement = target - num;
            
            // Ensure that smaller value comes first in the pair for consistency
            const minVal = Math.min(num, complement);
            const maxVal = Math.max(num, complement);
            
            // Create a unique key for the pair
            const pairKey = `${minVal},${maxVal}`;

            // If complement is already in the seen set and pair is not already added
            if (seen.has(complement) && !uniquePairs.has(pairKey)) {
                uniquePairs.add(pairKey);  // Mark this pair as seen
                result.push([minVal, maxVal]);  // Add the pair to the result
            }

            // Add current number to the seen set
            seen.add(num);
        }

        // Sort the result array to return pairs in ascending order based on the first element
        return result.sort((a, b) => a[0] - b[0]);
    }
}
