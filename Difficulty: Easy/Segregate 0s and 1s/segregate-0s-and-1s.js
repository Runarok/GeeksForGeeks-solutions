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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let n = arr.length;
        let obj = new Solution();
        let res = obj.segregate0and1(arr);
        let s = "";
        for (let j = 0; j < n; j++) {
            s += arr[j] + " ";
        }
        console.log(s);

        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    /**
     * Function to segregate 0s and 1s in an array.
     * @param {number[]} arr - The input array containing 0s and 1s.
     */
    segregate0and1(arr) {
        let left = 0;         // Pointer for the left side of the array
        let right = arr.length - 1; // Pointer for the right side of the array

        while (left < right) {
            // Move the left pointer until we find a 1
            while (arr[left] === 0) {
                left++;
            }
            
            // Move the right pointer until we find a 0
            while (arr[right] === 1) {
                right--;
            }
            
            // Swap the 1 at left and 0 at right, if left < right
            if (left < right) {
                arr[left] = 0;
                arr[right] = 1;
                left++;
                right--;
            }
        }
    }
}
