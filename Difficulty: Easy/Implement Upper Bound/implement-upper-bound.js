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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.upperBound(arr, x);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number}
 */

class Solution {
    upperBound(arr, target) {
        // Initialize low and high pointers for binary search
        let low = 0;
        let high = arr.length - 1;
        let res = arr.length; // Default result is the length of the array
        
        // Binary search to find the upper bound
        while(low <= high) {
            let mid = Math.floor((low + high) / 2); // Find the middle index
            
            // If the element at mid is greater than target, move high to mid - 1
            if(arr[mid] > target) {
                res = mid; // Update result to mid, as it's a potential upper bound
                high = mid - 1; // Look for smaller values to the left
            } else {
                low = mid + 1; // Otherwise, search to the right
            }
        }
        
        // Return the index of the first element greater than target
        return res;
    }
}
