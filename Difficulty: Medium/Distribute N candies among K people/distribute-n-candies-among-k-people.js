//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let nd = readLine().split(' ').map(Number);
        let n = nd[0];
        let k = nd[1];
        let obj = new Solution();
        let res = obj.distributeCandies(n, k);
        let s = "";
        for (let it of res) {
            s += it + " ";
        }
        console.log(s);
    
console.log("~");
}
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
 */
class Solution {
    // Function to distribute candies among k people
    distributeCandies(n, k) {
        let l = 0, h = n;  // Set initial bounds for binary search
        let level = 0;  // To store the number of full levels of distribution
        let ans = Array(k).fill(0);  // Array to store the candies distributed to each person

        // Binary search to find the maximum level of distribution
        while (l <= h) {
            let m = l + Math.floor((h - l) / 2);  // Midpoint to check the total candies for m terms
            let sum = (m * (m + 1)) / 2;  // Sum of the first m numbers

            // If sum is less than or equal to n, we can distribute m levels
            if (sum <= n) {
                level = Math.floor(m / k);  // Determine the full levels we can distribute
                l = m + 1;  // Move the lower bound up to check for a larger m
            } else {
                h = m - 1;  // Move the upper bound down
            }
        }

        const lastLevel = level * k;  // Total candies distributed in full levels
        let remaining = n - (lastLevel * (lastLevel + 1)) / 2;  // Remaining candies
        let nextTerm = lastLevel + 1;  // The next term to be distributed
        let i = 0;  // Index for the ans array

        // Distribute the remaining candies
        while (remaining) {
            if (nextTerm <= remaining) {
                ans[i] += nextTerm;
                i++;
                remaining -= nextTerm;
                nextTerm++;
            } else {
                ans[i] = remaining;
                break;
            }
        }

        // Add the full levels of distribution to the ans array
        for (let i = 0; i < k; i++) {
            ans[i] += level * (i + 1) + Math.floor((level * (level - 1) * k) / 2);
        }

        return ans;  // Return the result
    }
}
