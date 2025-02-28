//{ Driver Code Starts
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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let nums = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.find_min(nums);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the minimum value in the array
    find_min(arr) {
        // Variable to accumulate the sum of logarithms of the elements
        var sum = 0;

        // Loop through the array to calculate the sum of logarithms
        for (let i = 0; i < arr.length; i++) {
            sum += Math.log(arr[i]);
        }

        // Calculate the geometric mean of the elements and apply the formula
        var x = parseInt(Math.exp(sum / arr.length));

        // Return the minimal element according to the formula, adding 1 to the result
        return x + 1;
    }
}
