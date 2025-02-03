//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function printArray(res, n) {
    for (let i = 0; i < n; i++) {
        let s = "";
        for (let j = 0; j < res[i].length; j++) {
            s += res[i][j] + " ";
        }
        console.log(s.trim());
    }
}

function main() {
    let t = parseInt(readLine()); // Number of test cases
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x)); // Array input
        let input_ar1 =
            readLine().split(' ').map(x => parseInt(x)); // Second input for target sum
        let k = input_ar1[0];                            // Target sum

        let obj = new Solution();
        let res = obj.findTriplets(arr, k);

        if (res.length === 0) {
            console.log(-1); // If no triplets are found, print -1
        } else {
            printArray(res, res.length); // Otherwise, print the result
        }
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[][]}
 */

class Solution {
    findTriplets(arr, k) {
        // Sort the array to efficiently find triplets
        arr.sort((a, b) => a - b);
        const triplets = [];

        // Iterate through the array to find triplets
        for (let i = 0; i < arr.length - 2; i++) {
            // Skip duplicates to avoid repeating triplets
            if (i > 0 && arr[i] === arr[i - 1]) continue;

            let left = i + 1, right = arr.length - 1;

            // Use two pointers to find pairs that sum up with arr[i] to form the triplet
            while (left < right) {
                const sum = arr[i] + arr[left] + arr[right];
                
                if (sum === k) {
                    // If the sum matches the target, add the triplet
                    triplets.push([arr[i], arr[left], arr[right]]);
                    left++;
                    right--;

                    // Skip duplicate elements for left and right pointers to avoid repeating triplets
                    while (left < right && arr[left] === arr[left - 1]) left++;
                    while (left < right && arr[right] === arr[right + 1]) right--;
                } else if (sum < k) {
                    // If the sum is less than the target, move left pointer to increase the sum
                    left++;
                } else {
                    // If the sum is greater than the target, move right pointer to decrease the sum
                    right--;
                }
            }
        }

        return triplets; // Return the list of triplets
    }
}
