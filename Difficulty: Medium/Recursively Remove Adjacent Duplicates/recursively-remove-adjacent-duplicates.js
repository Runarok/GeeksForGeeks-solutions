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

function printArray(arr) {
    let s = "";
    for (let i of arr) {
        s = s + i + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s = readLine();
        let ob = new Solution();
        // let s = ob.remove_util(s);
        let ss = ob.removeUtil(s);
        if (ss.length === 0) {
            console.log("\"\"");
        } else {
            console.log(ss);
        }

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @return {string}
 */

class Solution {
    // Function to remove adjacent duplicates recursively
    removeUtil(s) {
        let n = s.length;
        let num_set = new Set();
        let duplicate_found = false;

        // Loop through the string to find consecutive duplicates
        for (let i = 0; i < n - 1; i++) {
            if (s[i] === s[i + 1]) {
                num_set.add(i);
                duplicate_found = true;
            } else if (duplicate_found) {
                num_set.add(i);
                duplicate_found = false;
            }
        }

        // If the last character is part of the duplicate sequence
        if (duplicate_found) {
            num_set.add(n - 1);
        }

        // If no duplicates were found, return the string as it is
        if (num_set.size === 0) {
            return s;
        }

        // Create a new string without the indices of the duplicates
        let new_str = '';
        for (let i = 0; i < n; i++) {
            if (!num_set.has(i)) {
                new_str += s[i];
            }
        }

        // Recursively call the function on the new string
        return this.removeUtil(new_str);
    }
}
