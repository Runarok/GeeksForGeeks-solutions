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
        let arr = readLine().split(' ').map(x => parseInt(x));
        let brr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.countPairs(arr, brr));
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number[]} brr
 * @returns {number}
 */

class Solution {
    // Function to count the number of pairs such that x^y is greater than y^x.
    countPairs(arr, brr) {
        // Initialize the answer variable
        let ans = 0;

        // Count of occurrences for specific values in the brr array
        let c0 = 0, c1 = 0, c2 = 0, c3 = 0, c4 = 0;

        // Sort the input arrays for easier comparison
        arr.sort((a, b) => a - b);
        brr.sort((a, b) => a - b);

        // Count occurrences of specific values in brr
        for (let i = 0; i < brr.length; i++) {
            if (brr[i] == 0) {
                c0++;
            } else if (brr[i] == 1) {
                c1++;
            } else if (brr[i] == 2) {
                c2++;
            } else if (brr[i] == 3) {
                c3++;
            } else if (brr[i] == 4) {
                c4++;
            }
        }

        // Pointer for traversing brr
        let j = 0;

        // Loop through each element in arr
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                // Skip processing if arr[i] is 0 as it doesn't contribute to any valid pair
            } else if (arr[i] == 1) {
                // If arr[i] is 1, only count the pairs where y = 0 (since x^y is 1^0 = 1, which is greater)
                ans = ans + c0;
            } else {
                // For other values of arr[i], we count the pairs with:
                // y = 0 (since x^0 is always greater than y^x)
                // y = 1 (since x^1 is always greater than 1^x for x > 1)
                ans = ans + c0 + c1;

                // For each element in arr, find the count of elements in brr that are strictly smaller
                // than arr[i] and count the pairs where x^y is greater than y^x.
                while (j < brr.length && brr[j] <= arr[i]) {
                    j++;
                }
                ans = ans + brr.length - j;

                // Special handling for 2 and 3, as their behavior with other numbers differs
                if (arr[i] == 2) {
                    ans -= c3;
                    ans -= c4;
                } else if (arr[i] == 3) {
                    ans += c2;
                }
            }
        }

        // Return the final count of valid pairs
        return ans;
    }
}
