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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.inversionCount(arr));
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to count inversions in the array.
    inversionCount(arr) {
        // Helper function to count inversions during merge sort
        function mergeAndCount(arr, tempArr, left, right) {
            if (left >= right) {
                return 0;
            }
            let mid = Math.floor((left + right) / 2);
            let invCount = 0;

            invCount += mergeAndCount(arr, tempArr, left, mid); // Left half
            invCount += mergeAndCount(arr, tempArr, mid + 1, right); // Right half

            invCount += merge(arr, tempArr, left, mid, right); // Merging and counting inversions

            return invCount;
        }

        // Merge function to merge two halves and count inversions
        function merge(arr, tempArr, left, mid, right) {
            let i = left; // Starting index for left subarray
            let j = mid + 1; // Starting index for right subarray
            let k = left; // Starting index to be sorted
            let invCount = 0;

            // Merge the two halves into tempArr[]
            while (i <= mid && j <= right) {
                if (arr[i] <= arr[j]) {
                    tempArr[k] = arr[i];
                    i++;
                } else {
                    tempArr[k] = arr[j];
                    invCount += (mid - i + 1); // All remaining elements in left subarray are greater than arr[j]
                    j++;
                }
                k++;
            }

            // Copy the remaining elements of left subarray, if any
            while (i <= mid) {
                tempArr[k] = arr[i];
                i++;
                k++;
            }

            // Copy the remaining elements of right subarray, if any
            while (j <= right) {
                tempArr[k] = arr[j];
                j++;
                k++;
            }

            // Copy the sorted subarray into the original array
            for (let i = left; i <= right; i++) {
                arr[i] = tempArr[i];
            }

            return invCount;
        }

        // Temporary array to help with merging
        let tempArr = new Array(arr.length);
        return mergeAndCount(arr, tempArr, 0, arr.length - 1);
    }
}
