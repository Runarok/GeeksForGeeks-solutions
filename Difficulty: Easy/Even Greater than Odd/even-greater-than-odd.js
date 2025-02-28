//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(str => str.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

// Function to check if the rearranged array satisfies the condition
function checkOrder(res, n) {
    for (let i = 1; i < n; i++) {
        if (i % 2 !== 0) { // Odd index
            if (res[i] < res[i - 1]) {
                return false;
            }
        } else { // Even index
            if (res[i] > res[i - 1]) {
                return false;
            }
        }
    }
    return true;
}

function main() {
    let t = parseInt(readLine().trim());

    for (let i = 0; i < t; i++) {
        let arr = readLine().trim().split(" ").map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.rearrangeArray(arr);

        // Check if the rearranged array satisfies the condition
        let check_ans = checkOrder(res, res.length);

        // Check if the rearranged array has the same elements as the original array
        let sortedRes = [...res ].sort((a, b) => a - b); // Sort rearranged array
        let sortedArr = [...arr ].sort((a, b) => a - b); // Sort original array
        let tryingToHack = JSON.stringify(sortedRes) !== JSON.stringify(sortedArr);

        // Output the result based on the checks
        if (tryingToHack) {
            console.log("The return array elements should be the same as the input");
        } else if (check_ans) {
            console.log("true");
        } else {
            console.log("false");
        }
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr - The input array to rearrange.
 * @param {number} n - The size of the input array.
 * @returns {number[]} - The rearranged array.
 */

class Solution {
    rearrangeArray(arr) {
        // Create a new array to store the rearranged values
        var answer = new Array(arr.length);

        // Initialize pointers for the minimum and maximum values in the array
        var min = 0;
        var max = arr.length - 1;

        // Sort the input array in ascending order
        arr.sort((a, b) => a - b);

        // Iterate through the array and fill the answer array with alternating min and max elements
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                // For even indices, assign the smallest remaining element
                answer[i] = arr[min];
                min++; // Move the min pointer forward
            } else {
                // For odd indices, assign the largest remaining element
                answer[i] = arr[max];
                max--; // Move the max pointer backward
            }
        }

        // Return the rearranged array
        return answer;
    }
}
