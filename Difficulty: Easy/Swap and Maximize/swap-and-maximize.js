//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Initial Template for javascript

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

function printList(res) {
    let s = res.join(" ");
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.maxSum(arr);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {void}
 */

class Solution {
    // Function to return the maximum sum of absolute differences
    maxSum(arr) {
        // Initialize variables for the sum, and arrays to store the reordered elements
        var sum = 0;
        let minArr = [], maxArr = [], res = [];
        
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);
        
        // Initialize two pointers, one at the start (l) and one at the end (r) of the array
        let l = 0, r = arr.length - 1;
        
        // Distribute elements between minArr (small values) and maxArr (large values)
        while (l <= r) {
            if (l == r) {
                // If only one element is left, add it to minArr
                minArr.push(arr[l]);
                l++;
                continue;
            }
            // Push the smallest value to minArr and the largest value to maxArr
            minArr.push(arr[l]);
            maxArr.push(arr[r]);
            l++;
            r--;
        }

        // Initialize pointers for minArr and maxArr
        l = 0, r = 0;
        
        // Merge minArr and maxArr into a result array in an alternating pattern
        while (l < minArr.length && r < maxArr.length) {
            res.push(minArr[l]);
            res.push(maxArr[r]);
            l++;
            r++;
        }

        // Calculate the sum of absolute differences between consecutive elements
        for (var i = 0; i < res.length - 1; i++) {
            sum += Math.abs(res[i] - res[i + 1]);
        }
        
        // Add the absolute difference between the last and the first element
        sum += Math.abs(res[res.length - 1] - res[0]);
        
        // Return the calculated sum
        return sum;
    }
}
