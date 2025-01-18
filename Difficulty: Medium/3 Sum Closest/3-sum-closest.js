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

function printArray(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        ;
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let target = parseInt(readLine());
        let obj = new Solution();
        let res = obj.closest3Sum(arr, target);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    closest3Sum(arr, target) {
        // Sort the array to enable two-pointer approach
        arr.sort((a, b) => a - b);

        let closestSum = Number.MIN_SAFE_INTEGER;
        let minDiff = Number.MAX_SAFE_INTEGER;

        // Traverse the array
        for (let i = 0; i < arr.length - 2; i++) {
            let left = i + 1;
            let right = arr.length - 1;

            // Use two pointers to find the closest sum for the current element
            while (left < right) {
                const currentSum = arr[i] + arr[left] + arr[right];
                const currentDiff = Math.abs(target - currentSum);

                // Update the closest sum if the current difference is smaller
                // or if the difference is the same but the sum is larger
                if (
                    currentDiff < minDiff ||
                    (currentDiff === minDiff && currentSum > closestSum)
                ) {
                    closestSum = currentSum;
                    minDiff = currentDiff;
                }

                // Adjust pointers
                if (currentSum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return closestSum;
    }
}
