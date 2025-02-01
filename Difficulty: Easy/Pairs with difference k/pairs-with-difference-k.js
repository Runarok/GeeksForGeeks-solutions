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
        let res = obj.countPairs(arr, k);
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
    // Function to count pairs with a difference of k
    countPairs(arr, k) {
        // Map to store the frequency of elements
        let freq = new Map();
        let count = 0;

        // Iterate through each number in the array
        for (let num of arr) {
            // Check if (num - k) is in the map and add its frequency to count
            if (freq.has(num - k)) {
                count += freq.get(num - k);
            }
            
            // Check if (num + k) is in the map and add its frequency to count
            if (freq.has(num + k)) {
                count += freq.get(num + k);
            }

            // Update the frequency of the current number
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        // Return the total count of valid pairs
        return count;
    }
}
