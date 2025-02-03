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
        let res = obj.findClosest(arr, x);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends



class Solution {
    /**
     * @param {number} k
     * @param {number[]} arr
     * @returns {number}
     */
    findClosest(arr, k) {
        let diff = Infinity;  // Initialize the difference as a very large number
        let res = 0;  // Variable to store the closest number
        
        // Loop through the array to find the closest element
        for (let i = 0; i < arr.length; i++) {
            const currDiff = Math.abs(k - arr[i]);  // Calculate the absolute difference between k and the current element
            
            if (currDiff < diff) {
                diff = currDiff;  // Update the minimum difference
                res = arr[i];  // Update the result with the current element
            } else if (currDiff === diff) {
                res = Math.max(res, arr[i]);  // If the difference is the same, choose the larger number
            }
        }
        
        return res;  // Return the closest element found
    }
}
