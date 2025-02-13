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

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let m = parseInt(readLine());
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.minDaysBloom(m, k, arr);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

class Solution {
    /**
     * Helper function to check if it's possible to form `m` bouquets
     * with `k` adjacent flowers blooming within `days`.
     * @param {number[]} arr - The array representing the bloom days of flowers.
     * @param {number} m - The number of bouquets needed.
     * @param {number} k - The number of adjacent flowers needed for each bouquet.
     * @param {number} days - The maximum number of days allowed.
     * @returns {boolean} - Returns true if it's possible to form `m` bouquets, otherwise false.
     */
    check(arr, m, k, days) {
        let bouquets = 0;
        let count = 0;

        // Traverse through the flower array
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= days) {
                count += 1; // If the flower blooms within `days`, count it
            } else {
                bouquets += Math.floor(count / k); // Form bouquets from the counted flowers
                count = 0; // Reset the count after a flower that doesn't bloom
            }
        }

        // Add bouquets formed from the remaining flowers
        bouquets += Math.floor(count / k);
        return bouquets >= m; // Return true if enough bouquets can be formed
    }

    /**
     * Function to find the minimum number of days required to form `m` bouquets.
     * @param {number} m - The number of bouquets needed.
     * @param {number} k - The number of adjacent flowers needed for each bouquet.
     * @param {number[]} arr - The array representing the bloom days of flowers.
     * @returns {number} - The minimum number of days required to form `m` bouquets.
     */
    minDaysBloom(m, k, arr) {
        let low = 0;
        let high = Math.max(...arr); // The maximum number of days in the array
        let res = -1;

        // Binary search to find the minimum number of days
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (this.check(arr, m, k, mid)) {
                res = mid; // Update result if it's possible to form `m` bouquets
                high = mid - 1; // Try to find a smaller number of days
            } else {
                low = mid + 1; // If not possible, try a higher number of days
            }
        }
        return res; // Return the result
    }
}
