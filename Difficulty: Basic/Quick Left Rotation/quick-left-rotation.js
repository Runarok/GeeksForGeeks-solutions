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
        let k = parseInt(readLine());
        let obj = new Solution();
        obj.leftRotate(arr, k);
        let s = "";
        for (let it of arr) {
            s += it + " ";
        }
        console.log(s);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    // Function to left rotate the array by k positions
    leftRotate(arr, k) {
        // Helper function to reverse a portion of the array
        let reverse = (arr, left, right) => {
            while(left <= right) {
                // Swap elements at the left and right positions
                let temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }

        // Ensure k is within the bounds of the array length
        k = k % arr.length;

        // Reverse the first part of the array (0 to k-1)
        reverse(arr, 0, k-1);

        // Reverse the second part of the array (k to n-1)
        reverse(arr, k, arr.length - 1);

        // Reverse the entire array to get the final rotated result
        reverse(arr, 0, arr.length - 1);

        return arr;
    }
}
