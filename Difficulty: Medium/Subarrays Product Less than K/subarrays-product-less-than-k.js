//{ Driver Code Starts
// Initial Template
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
        let n = parseInt(input_line[0]);
        let k = parseInt(input_line[1]);

        input_line = readLine().split(' ');
        let a = new Array(n);
        for (let i = 0; i < n; i++) a[i] = parseInt(input_line[i]);

        let obj = new Solution();
        let ans = obj.countSubArrayProductLessThanK(a, n, k);
        if (ans == -0) ans = 0;
        console.log(ans.toString());

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} a
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to count the number of subarrays with product less than k.
    countSubArrayProductLessThanK(arr, n, k) {
        // If k is less than or equal to 1, no subarray can have a product less than k.
        if (k <= 1) return 0;

        let left = 0;  // Left pointer to track the start of the subarray
        let count = 0; // Variable to count the subarrays
        let product = 1; // Variable to track the product of the current subarray
        let right = 0; // Right pointer to explore each element in the array

        // Traverse the array using the right pointer
        while (right < arr.length) {
            product *= arr[right];  // Multiply the current element to the product

            // While the product is greater than or equal to k, move the left pointer to reduce the product
            while (product >= k) {
                product /= arr[left++];  // Divide by the element at the left pointer and increment it
            }

            // Add the count of valid subarrays ending at the current 'right' index
            count += (right - left + 1);
            right++; // Move the right pointer to the next element
        }

        // Return the total count of subarrays with product less than k
        return count;
    }
}
