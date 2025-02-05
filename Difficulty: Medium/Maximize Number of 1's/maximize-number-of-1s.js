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
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = input_line.length;

        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = parseInt(input_line[i]);
        }

        let k = parseInt(readLine());

        let obj = new Solution();
        let ans = obj.maxOnes(arr, k);
        if (ans == -0) ans = 0;
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends


/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to find the maximum number of 1's in the array after flipping at most 'k' 0's
    maxOnes(arr, k) {
        let N = arr.length; // Get the length of the array
        let start = 0; // Left pointer of the sliding window
        let end = 0; // Right pointer of the sliding window
        let count = 0; // Number of 0's in the current window
        let maxCount = 0; // To store the maximum length of subarray with at most 'k' 0's flipped

        // Iterate through the array using the 'end' pointer
        while (end < N) {
            // If we encounter a 0, increment the count of flipped 0's
            if (arr[end] === 0) {
                count++;
            }
            
            // If the count of flipped 0's exceeds 'k', shrink the window by moving the 'start' pointer
            while (count > k) {
                // If the element at 'start' is 0, reduce the count
                if (arr[start] === 0)
                    count--;
                start++; // Move the start pointer to the right
            }
            
            // Calculate the length of the current valid window and update maxCount
            maxCount = Math.max(maxCount, end - start + 1);
            end++; // Move the end pointer to the right
        }
        
        // Return the maximum length of subarray with at most 'k' flipped 0's
        return maxCount;
    }
}
