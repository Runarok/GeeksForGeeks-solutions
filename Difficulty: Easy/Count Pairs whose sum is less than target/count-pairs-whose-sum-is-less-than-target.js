//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        console.log(obj.countPairs(arr, k));
        console.log('~');
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
class Solution {
    // Function to count the number of pairs with sum less than the target
    countPairs(arr, target) {
        let n = arr.length;
        let count = 0;

        // Sort the array in ascending order
        arr.sort((a, b) => a - b);

        // Initialize two pointers, one at the beginning and one at the end of the array
        let left = 0, right = n - 1;

        // Iterate until the two pointers cross each other
        while (left < right) {
            let sum = arr[left] + arr[right];

            if (sum < target) {
                // If the sum of the pair is less than the target, add all possible pairs from `left` to `right`
                count += (right - left);
                left++; // Move the left pointer to the right to find new pairs
            } else {
                right--; // Move the right pointer to the left to reduce the sum
            }
        }

        // Return the total count of valid pairs
        return count;
    }
}
