//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        // let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.minSwap(arr, k);
        if (res === -0) res = 0;
        console.log(res);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    minSwap(arr, k) {
        let n = arr.length;
        let left = 0;
        let right = n - 1;
        let swap = 0;

        // Loop until left and right pointers meet
        while (left < right) {
            // If the left element is less than or equal to k, no need to swap, just move the left pointer
            if (arr[left] <= k) {
                left += 1;

            // If the left element is greater than k and the right element is less than or equal to k, swap them
            } else if (arr[left] > k && arr[right] <= k) {
                [arr[left], arr[right]] = [arr[right], arr[left]];  // Swap elements
                swap += 1;
                right -= 1;

            // If both the left and right elements are greater than k, move the right pointer
            } else if (arr[left] > k && arr[right] > k) {
                right -= 1;
            }
        }

        // Return the total number of swaps made
        return swap;
    }
}
