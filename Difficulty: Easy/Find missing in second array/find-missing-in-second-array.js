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
        let a = readLine().split(" ").map((x) => parseInt(x));
        let b = readLine().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.findMissing(a, b);
        printArray(res, res.length);

        console.log("~");
    }
}
// } Driver Code Ends

/**
 * @param {Number[]} arr1
 * @param {Number[]} arr2
 * @returns {Number[]}
 */

class Solution {
    // Function to find elements present in arr1 but not in arr2
    findMissing(a, b) {
        // Create a set from arr2 to allow faster lookups
        const set = new Set(b);
        
        // Initialize an array to store the missing elements
        const arr = [];
        
        // Iterate through arr1 and add elements that are not in arr2 to arr
        for (const num of a) {
            if (!set.has(num)) {
                arr.push(num);
            }
        }
        
        // Return the array of missing elements
        return arr;
    }
}
