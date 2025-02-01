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
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.pythagoreanTriplet(arr);
        if (res)
            console.log("true");
        else
            console.log("false");
    }
}

// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number[]} arr - The input array of integers
 * @return {boolean} - Returns true if a Pythagorean triplet exists, otherwise false
 */

class Solution {
    pythagoreanTriplet(arr) {
        let n = arr.length;
        let maxEle = 0;

        // Find the maximum element in the array
        for (let ele of arr) {
            maxEle = Math.max(maxEle, ele);
        }

        // Create a boolean array to mark visited elements
        let vis = new Array(maxEle + 1).fill(false);

        // Mark each element present in the input array
        for (let ele of arr) {
            vis[ele] = true;
        }

        // Iterate for all possible values of 'a'
        for (let a = 1; a <= maxEle; a++) {

            // If 'a' is not present in the array, skip
            if (!vis[a]) continue;

            // Iterate for all possible values of 'b'
            for (let b = 1; b <= maxEle; b++) {

                // If 'b' is not present in the array, skip
                if (!vis[b]) continue;

                // Calculate the value of 'c' using the Pythagorean theorem
                let c = Math.floor(Math.sqrt(a * a + b * b));

                // Check if 'c' is a perfect square and within the max limit
                if ((c * c) !== (a * a + b * b) || c > maxEle) continue;

                // If 'c' exists in the original array, we found a triplet
                if (vis[c]) {
                    return true;
                }
            }
        }

        // No Pythagorean triplet found
        return false;
    }
}
