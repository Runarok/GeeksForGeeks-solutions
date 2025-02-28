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
        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.subArraySum(arr, k);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    subArraySum(arr, k) {
        // Hash map to store frequency of prefix sums
        let prefixMap = new Map();
        let prefixSum = 0;
        let count = 0;

        // Initialize map with the base case: sum 0 has one occurrence (for subarrays starting from index 0)
        prefixMap.set(0, 1);

        // Traverse the array
        for (let num of arr) {
            // Update the current prefix sum
            prefixSum += num;

            // If (prefixSum - k) exists in the map, add its frequency to count
            if (prefixMap.has(prefixSum - k)) {
                count += prefixMap.get(prefixSum - k);
            }

            // Update the frequency of the current prefix sum in the map
            prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1);
        }

        return count;
    }
}
