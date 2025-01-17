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
        let obj = new Solution();
        console.log(obj.maxIndexDiff(arr));
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
    maxIndexDiff(arr) {
        let n = arr.length;
        
        // Step 1: Build leftMin[] and rightMax[] arrays
        let leftMin = new Array(n);
        let rightMax = new Array(n);
        
        // Initialize leftMin
        leftMin[0] = arr[0];
        for (let i = 1; i < n; i++) {
            leftMin[i] = Math.min(leftMin[i - 1], arr[i]);
        }
        
        // Initialize rightMax
        rightMax[n - 1] = arr[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
        }
        
        // Step 2: Find maximum j - i such that leftMin[i] <= rightMax[j]
        let i = 0;
        let j = 0;
        let maxDiff = -1;
        
        while (i < n && j < n) {
            if (leftMin[i] <= rightMax[j]) {
                maxDiff = Math.max(maxDiff, j - i);
                j++;
            } else {
                i++;
            }
        }
        
        return maxDiff;
    }
}
