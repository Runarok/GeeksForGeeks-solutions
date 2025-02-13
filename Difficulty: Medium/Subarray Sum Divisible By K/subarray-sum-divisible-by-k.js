//{ Driver Code Starts
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

function printList(arr) { console.log(arr.join(' ')); }

function main() {
    let t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let d = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.subCount(arr, d);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to count the number of subarrays with a sum divisible by k
    subCount(arr, k) {
        let map = new Map();
        let pre = 0;  // Initialize the prefix sum
        let count = 0;  // Initialize the count of subarrays with sum divisible by k
        map.set(0, 1);  // To handle the case where the prefix sum itself is divisible by k

        // Traverse the array
        for (let i = 0; i < arr.length; i++) {
            pre += arr[i];  // Update the prefix sum
            
            // Find remainder when the prefix sum is divided by k
            let rem = ((pre % k) + k) % k;

            // If remainder exists in the map, add the count of such subarrays
            if (map.has(rem)) {
                count += map.get(rem);
            }

            // Update the map with the current remainder
            map.set(rem, (map.get(rem) || 0) + 1);
        }

        return count;  // Return the total count of subarrays with sum divisible by k
    }
}
