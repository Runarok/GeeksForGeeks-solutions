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
    for (let i = 0; i < t; i++) {

        let a = readLine().split(' ').map(x => parseInt(x, 10));
        let b = readLine().split(' ').map(x => parseInt(x, 10));
        let obj = new Solution();

        let ans = obj.numberofElementsInIntersection(a, b);
        console.log(ans);

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */

class Solution {
    // Function to return the count of the number of elements in
    // the intersection of two arrays.
    numberofElementsInIntersection(a, b) {
        // Sort both arrays in ascending order
        a.sort((a, b) => a - b);
        b.sort((a, b) => a - b);

        let n = a.length;
        let n2 = b.length;
        let ans = [];
        let left = 0;
        let right = 0;

        // Use two pointers to find common elements in both arrays
        while (left < n && right < n2) {
            if (a[left] < b[right]) {
                left++;  // Move left pointer if element in 'a' is smaller
            } else if (b[right] < a[left]) {
                right++;  // Move right pointer if element in 'b' is smaller
            } else {
                // If elements are equal, add to the result and move both pointers
                ans.push(a[left]);
                left++;
                right++;
            }
        }

        // Return the count of common elements
        return ans.length;
    }
}
