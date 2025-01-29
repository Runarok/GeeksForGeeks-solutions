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

        let obj = new Solution();
        let ans = obj.sumOfMax(arr);

        console.log(ans);
        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    sumOfMax(arr) {
        const n = arr.length;
        const left = new Array(n).fill(0);  // Distance to the previous greater element
        const right = new Array(n).fill(0); // Distance to the next greater element
        const stack = [];

        // Calculate distances to the previous greater element
        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
                stack.pop();
            }
            left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
            stack.push(i);
        }

        // Clear the stack for the next pass
        stack.length = 0;

        // Calculate distances to the next greater element
        for (let i = n - 1; i >= 0; i--) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
                stack.pop();
            }
            right[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
            stack.push(i);
        }

        // Calculate the sum of maximum elements
        let result = 0;
        for (let i = 0; i < n; i++) {
            result += arr[i] * left[i] * right[i];
        }

        return result;
    }
}
