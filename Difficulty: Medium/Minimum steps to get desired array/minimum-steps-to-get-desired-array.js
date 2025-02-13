//{ Driver Code Starts
// Initial Template for JavaScript

'use strict';

// Prepare to read from standard input
process.stdin.resume();
process.stdin.setEncoding('utf-8');

// Initialize variables to handle input
let inputString = '';
let currentLine = 0;

// Event listener for 'data' event to accumulate input
process.stdin.on('data', inputStdin => { inputString += inputStdin; });

// Event listener for 'end' event to process input after all data is received
process.stdin.on('end', _ => {
    // Split the input into lines and trim each line
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main(); // Call the main function to process input
});

// Function to read the next line of input
function readLine() { return inputString[currentLine++]; }

// Main function to handle the test cases
function main() {
    let t = parseInt(readLine()); // Read the number of test cases

    // Process each test case
    for (let i = 0; i < t; i++) {
        // Read and parse the array of integers
        let inputArray = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        // Calculate the minimum number of operations and print the result
        console.log(obj.countMinOperations(inputArray));
    }
}

// } Driver Code Ends

class Solution {
    /**
    * @param {number[]} arr
    * @returns {number}
    */
    countMinOperations(arr) {
        // Initialize total steps and maximum doubling operations
        let steps = 0;
        let maxDoubling = 0;

        // Loop through each number in the array
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            let doublingOps = 0;

            // Count the number of increment operations needed to reduce the number to 0
            while (num > 0) {
                if (num % 2 === 1) { // If the least significant bit is 1, we need an increment operation
                    steps++;
                }
                num = Math.floor(num / 2); // Simulate a right shift operation (division by 2)
                if (num > 0) { // Track doubling operations (if the number is still positive)
                    doublingOps++;
                }
            }

            // Keep track of the maximum number of doubling operations required
            maxDoubling = Math.max(maxDoubling, doublingOps);
        }

        // Return the total operations as the sum of increment and doubling operations
        return steps + maxDoubling;
    }
}
