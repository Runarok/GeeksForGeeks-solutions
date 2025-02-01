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
        let k = parseInt(readLine());
        let a = readLine().split(" ").map((x) => parseInt(x));
        let b = readLine().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.kthElement(a, b, k);

        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number} k

 * @returns {number}
 */

class Solution {
    // Function to find the kth element in the merged sorted array
    kthElement(a, b, k) {
        let n = a.length;
        let m = b.length;

        let arr = new Array(n + m);
        let i = 0, j = 0, d = 0;

        // Merge the two arrays
        while (i < n && j < m) {
            if (a[i] < b[j]) {
                arr[d] = a[i];
                i++;
            } else {
                arr[d] = b[j];
                j++;
            }
            d++;
        }

        // If elements left in a
        while (i < n) {
            arr[d] = a[i];
            i++;
            d++;
        }

        // If elements left in b
        while (j < m) {
            arr[d] = b[j];
            j++;
            d++;
        }

        // Return the kth element (k is 1-based, so we need k-1 index)
        return arr[k - 1];
    }
}
