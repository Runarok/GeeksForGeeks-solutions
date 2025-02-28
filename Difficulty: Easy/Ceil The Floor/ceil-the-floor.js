//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
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
        let x = parseInt(readLine());
        let input_line = readLine().split(' ');
        let arr = input_line.map(num => parseInt(num));

        let obj = new Solution();
        let ans = obj.getFloorAndCeil(x, arr);
        console.log(ans[0], ans[1]);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to find floor and ceil of a given number x in the array
    getFloorAndCeil(x, arr) {
        // Initialize result array with [-1, -1] for floor and ceil
        let res = new Array(2).fill(-1);

        // Iterate through the array to find the floor and ceil
        for (let i = 0; i < arr.length; i++) {
            // If the current element is greater than x, check for ceil
            if (arr[i] > x) {
                // Set ceil if it is not set yet or find the minimum ceil
                if (res[1] === -1) res[1] = arr[i];
                else res[1] = Math.min(arr[i], res[1]);
            }

            // If the current element is smaller than x, check for floor
            if (arr[i] < x) {
                // Set floor if it is not set yet or find the maximum floor
                if (res[0] === -1) res[0] = arr[i];
                else res[0] = Math.max(arr[i], res[0]);
            }

            // If the element is equal to x, both floor and ceil are x
            if (arr[i] === x) return [x, x];
        }

        // Return the result array containing floor and ceil values
        return res;
    }
}
