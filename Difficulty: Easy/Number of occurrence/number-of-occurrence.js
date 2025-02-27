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
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countFreq(arr, x);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} arr - Sorted input array
 * @param {number} target - Element whose frequency needs to be counted
 * @returns {number}
 */

class Solution {
    // Function to find the first position where target can appear (lower bound)
    lowerBound(arr, target) {
        let low = 0, high = arr.length - 1;
        let lowerBoundIndex = arr.length; // Default to out of bounds if not found

        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);
            if (arr[mid] >= target) {
                // Possible lower bound found, but keep looking left
                lowerBoundIndex = mid;
                high = mid - 1;
            } else {
                // Target must be further right
                low = mid + 1;
            }
        }
        return lowerBoundIndex;
    }

    // Function to find the first position after the last occurrence of target (upper bound)
    upperBound(arr, target) {
        let low = 0, high = arr.length - 1;
        let upperBoundIndex = arr.length; // Default to out of bounds if not found

        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);
            if (arr[mid] > target) {
                // First position where element is greater than target
                upperBoundIndex = mid;
                high = mid - 1;
            } else {
                // Target (or smaller) must be further right
                low = mid + 1;
            }
        }
        return upperBoundIndex;
    }

    // Function to count occurrences of target in the array
    countFreq(arr, target) {
        return this.upperBound(arr, target) - this.lowerBound(arr, target);
    }
}
