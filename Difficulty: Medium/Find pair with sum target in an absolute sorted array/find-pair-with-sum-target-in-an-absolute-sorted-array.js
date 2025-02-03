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
        let res = obj.findPair(arr, k);
        if (res.length === 0) {
            process.stdout.write('[]\n');
        } else {
            // sort the result before printing
            res.sort((a, b) => a - b);
            for (let i = 0; i < res.length; i++) {
                process.stdout.write(res[i] + ' ');
            }
            process.stdout.write('\n');
        }
        process.stdout.write('~\n');
    }
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */

class Solution {
    findPair(arr, target) {
        // Create a set to store elements that have been seen
        const seen = new Set();

        // Iterate through each number in the array
        for (const num of arr) {
            // Calculate the complementary value that sums up to the target
            const comp = target - num;

            // If the complementary value has been seen before, return the pair
            if (seen.has(comp)) return [comp, num];

            // Otherwise, add the current number to the set
            seen.add(num);
        }

        // If no pair is found, return an empty array
        return [];
    }
}
