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
        let res = obj.longestSubarrayDivK(arr, x);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

class Solution {
    // Function to find the length of the longest subarray with sum divisible by k
    longestSubarrayDivK(arr, k) {
        let maxLength = 0; // To store the maximum length of the subarray
        let prefixSum = 0; // To store the cumulative sum of elements
        let prefixMap = new Map(); // To store the first occurrence of each remainder
        prefixMap.set(0, -1); // Initializing with remainder 0 at index -1 (handles cases where the sum itself is divisible by k)
        
        for (let i = 0; i < arr.length; i++) {
            prefixSum += arr[i]; // Add the current element to the cumulative sum
            let remainder = prefixSum % k; // Find the remainder when the sum is divided by k
            
            // Adjust the remainder to be positive (since negative remainders may occur with negative numbers)
            if (remainder < 0) {
                remainder += k;
            }
            
            // Check if this remainder has been encountered before
            if (prefixMap.has(remainder)) {
                let startIndex = prefixMap.get(remainder); // Get the index of the first occurrence of this remainder
                maxLength = Math.max(maxLength, i - startIndex); // Calculate the length of the subarray and update maxLength
            } else {
                prefixMap.set(remainder, i); // If remainder not found, store the current index as its first occurrence
            }
        }
        
        return maxLength; // Return the length of the longest subarray with sum divisible by k
    }
}
