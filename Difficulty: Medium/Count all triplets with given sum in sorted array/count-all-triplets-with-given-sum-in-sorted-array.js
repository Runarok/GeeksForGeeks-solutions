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
    while (t-- > 0) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let target = parseInt(readLine());

        let obj = new Solution();
        let res = obj.countTriplets(arr, target);

        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends



/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    countTriplets(arr, target) {
        // Initialize result variable
        let res = 0;
        let n = arr.length;

        // Iterate through the array to select the first element of the triplet
        for (let i = 0; i < n - 2; i++) {
            let left = i + 1;
            let right = n - 1;

            // Use two-pointer technique for the second and third elements of the triplet
            while (left < right) {
                let sum = arr[i] + arr[left] + arr[right];

                // Adjust pointers based on the sum
                if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                } else {
                    let ele1 = arr[left];
                    let ele2 = arr[right];
                    let cnt1 = 0;
                    let cnt2 = 0;

                    // Count occurrences of the element at the left pointer
                    while (left <= right && arr[left] === ele1) {
                        left++;
                        cnt1++;
                    }

                    // Count occurrences of the element at the right pointer
                    while (left <= right && arr[right] === ele2) {
                        right--;
                        cnt2++;
                    }

                    // If the elements at the left and right pointers are the same
                    if (ele1 === ele2) {
                        res += (cnt1 * (cnt1 - 1)) / 2;
                    } else {
                        res += (cnt1 * cnt2);
                    }
                }
            }
        }

        return res;
    }
}
