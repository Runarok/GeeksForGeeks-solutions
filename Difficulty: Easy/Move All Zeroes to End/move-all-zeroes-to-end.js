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
        let arr = readLine().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        obj.pushZerosToEnd(arr);
        let n = arr.length;
        printArray(arr, n);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Number[]} arr
 */

class Solution {
    /**
     * Function to push all zeros to the end of the array without changing the order of non-zero elements.
     * @param {Number[]} arr - The input array containing zeros and non-zero elements.
     */
    pushZerosToEnd(arr) {
        let index = 0; // This will track the position to place the next non-zero element

        // Iterate through the array
        for (let i = 0; i < arr.length; i++) {
            // If the current element is non-zero
            if (arr[i] !== 0) {
                // Swap the current element with the element at 'index'
                [arr[index], arr[i]] = [arr[i], arr[index]];
                index++; // Move the index forward for the next non-zero element
            }
        }
    }
}
