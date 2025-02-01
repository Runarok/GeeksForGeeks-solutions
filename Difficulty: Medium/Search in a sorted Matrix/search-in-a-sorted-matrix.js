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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        if (arr[i] == -0) arr[i] = 0;
        s += arr[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let matrix = new Array(n);
        for (let i = 0; i < n; i++) {
            let a = new Array(m);
            let input_ar1 = readLine().split(' ').map(x => parseInt(x));
            for (let j = 0; j < m; j++) a[j] = input_ar1[j];
            matrix[i] = a;
        }
        let X = parseInt(readLine());
        let obj = new Solution();
        let ans = obj.searchMatrix(matrix, X);
        if (ans)
            console.log("true");
        else
            console.log("false");
        console.log("~")
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} mat
 * @param {number} x
 * @returns {boolean}
 */
 
class Solution {
    // Function to perform binary search on a 1D array (row)
    binarySearch(arr, l, r, target) {
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            if (arr[mid] === target) {
                return true; // Target found
            }
            if (arr[mid] < target) {
                l = mid + 1; // Search in the right half
            } else {
                r = mid - 1; // Search in the left half
            }
        }

        return false; // Target not found
    }

    // Function to search a given number in row-column sorted matrix
    searchMatrix(arr, target) {
        const n = arr.length; // Number of rows
        if (n === 0) return false; // Empty matrix case

        const m = arr[0].length; // Number of columns
        if (m === 0) return false; // Empty row case

        let l = 0, r = n - 1;
        let index = -1;

        // Perform binary search on rows to find the potential row
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            if (arr[mid][0] === target) {
                return true; // Target found
            }

            if (arr[mid][0] < target) {
                index = mid; // Update index for the possible row
                l = mid + 1; // Search in the lower half
            } else {
                r = mid - 1; // Search in the upper half
            }
        }

        // If no row is found, return false
        if (index === -1) {
            return false;
        }

        // Perform binary search in the found row
        return this.binarySearch(arr[index], 0, m - 1, target);
    }
}
