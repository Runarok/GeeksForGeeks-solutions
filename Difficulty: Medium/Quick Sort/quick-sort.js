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
        if (arr[i] === -0) arr[i] = 0;
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let n = arr.length;
        let obj = new Solution();
        obj.quickSort(arr, 0, n - 1);
        printArray(arr, arr.length);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 */

class Solution {
    // Function to partition the array around a pivot
    partition(arr, low, high) {
        let pivot = arr[low]; // Set the pivot as the first element of the subarray
        let left = low, right = high;
        
        // Partitioning loop
        while (left < right) {
            // Move left pointer to the right while elements are smaller or equal to pivot
            while (arr[left] <= pivot && left < high) {
                left++;
            }
            
            // Move right pointer to the left while elements are greater than pivot
            while (arr[right] > pivot && right > low) {
                right--;
            }
            
            // If left pointer is still less than right pointer, swap the elements
            if (left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
            }
        }
        
        // Place pivot in its correct position by swapping with right pointer
        [arr[low], arr[right]] = [arr[right], arr[low]];
        
        return right; // Return the partition index
    }

    // Function to perform quick sort
    quickSort(arr, low, high) {
        if (low < high) {
            const pivotIndex = this.partition(arr, low, high); // Partition and get pivot index
            // Recursively quick sort the left and right subarrays
            this.quickSort(arr, low, pivotIndex - 1); // Left subarray
            this.quickSort(arr, pivotIndex + 1, high); // Right subarray
        }
        
        return arr; // Return the sorted array
    }
}
