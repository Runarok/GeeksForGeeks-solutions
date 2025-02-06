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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().trim().split(" ").map((int) => { return parseInt(int); });

        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.subarrayXor(arr, k);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    
    // Function to count the number of subarrays with XOR equal to 'targetXor'.
    subarrayXor(arr, targetXor) {
        let subarrayCount = 0;
        let currentXor = 0;
        let xorFrequency = new Map();

        // Iterating through the array to compute XOR for subarrays.
        for (let i = 0; i < arr.length; i++) {
            currentXor ^= arr[i]; // Updating XOR with the current element.

            // If the current XOR directly equals the target, increment count.
            if (currentXor === targetXor) {
                subarrayCount++;
            }

            // Checking how many times (currentXor ^ targetXor) has appeared before.
            subarrayCount += xorFrequency.get(currentXor ^ targetXor) || 0;

            // Storing the frequency of currentXor in the hashmap.
            xorFrequency.set(currentXor, (xorFrequency.get(currentXor) || 0) + 1);
        }
        return subarrayCount;
    }
}
