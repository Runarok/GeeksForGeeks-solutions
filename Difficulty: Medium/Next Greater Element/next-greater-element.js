//{ Driver Code Starts
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
    let t = parseInt(readLine()); // Number of test cases
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x)); // Input array
        let obj = new Solution();
        const result = obj.nextLargerElement(arr);

        // Print the result in the required format
        if (result.length > 0) {
            console.log(result.join(' ')); // Print the next larger elements
        } else {
            console.log("[]"); // Print empty list if no next larger element
        }
        console.log("~");
    }
}

// } Driver Code Ends



// User function Template for JavaScript

/**
 * @param {int[]} arr - Input array of integers.
 * @returns {int[]} - Array containing the next greater element for each element.
 */
class Solution {
    // Function to find the next greater element for each element in the array.
    nextLargerElement(arr) {
        let stack = []; // Stack to keep track of elements in descending order.
        let N = arr.length; // Length of the input array.
        let result = new Array(N).fill(-1); // Initialize result array with -1 (default value).

        // Traverse the array from right to left.
        for (let i = N - 1; i >= 0; i--) {
            
            // Pop elements from the stack that are smaller or equal to the current element.
            while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop();
            }

            // If stack is not empty, the top of the stack is the next greater element.
            if (stack.length > 0) {
                result[i] = stack[stack.length - 1];
            }

            // Push the current element onto the stack for future comparisons.
            stack.push(arr[i]);
        }

        return result; // Return the final array of next greater elements.
    }
}
