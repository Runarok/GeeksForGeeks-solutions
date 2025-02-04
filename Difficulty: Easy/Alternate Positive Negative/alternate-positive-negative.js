//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        obj.rearrange(arr);
        printArray(arr, arr.length);

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {Number[]} arr
 * @returns {Number[]}
 */

class Solution {
    rearrange(arr) {
        // Initialize two arrays to separate positive and negative numbers
        let positives = [];
        let negatives = [];
        
        // Step 1: Separate positive and negative numbers into two arrays
        for (let num of arr) {
            if (num >= 0) {
                positives.push(num);  // Add positive numbers to the positives array
            } else {
                negatives.push(num);  // Add negative numbers to the negatives array
            }
        }
        
        // Initialize pointers for traversing the positives, negatives, and the result array
        let i = 0, j = 0, k = 0;
        
        // Step 2: Merge both arrays alternately into the original array
        // Add elements from positives and negatives alternatively
        while (i < positives.length && j < negatives.length) {
            arr[k++] = positives[i++];  // Add positive number
            arr[k++] = negatives[j++];  // Add negative number
        }
        
        // Step 3: Add remaining elements from positives array if any
        while (i < positives.length) {
            arr[k++] = positives[i++];
        }
        
        // Step 4: Add remaining elements from negatives array if any
        while (j < negatives.length) {
            arr[k++] = negatives[j++];
        }
        
        // Step 5: Return the rearranged array
        return arr;
    }
}

