//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

// Read input data
process.stdin.on('data', inputStdin => { inputString += inputStdin; });

// Process the input data after all is received
process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

// Function to read the current line of input
function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine(), 10); // Read number of test cases
    for (let i = 0; i < t; i++) {
        const input_ar1 =
            readLine().split(' ').map(x => parseInt(x, 10)); // Parse array of integers
        const obj = new Solution();
        console.log(obj.find(input_ar1).toString()); // Output the result as a string
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    /**
     * Finds the smallest valid number `x` such that for each number in the array,
     * the value `temp` computed from `x` is always non-negative.
     * 
     * @param {number[]} arr - The array of numbers to process.
     * @returns {number} - The smallest valid value of `x`.
     */
    find(arr) {
        let x = 1; // Start with an initial value for x.
        
        // Infinite loop that will break once a valid x is found.
        while(true) {
            let temp = x; // Initialize the temporary variable `temp` with the value of x.
            let is_valid = true; // Assume the current value of `x` is valid.

            // Iterate through each number in the array to check the validity of the current `x`.
            for(let num of arr) {
                if(temp > num) {
                    // If `temp` is greater than the current number, adjust `temp`.
                    temp = 2 * temp - num;
                } else {
                    // If `temp` is not greater, apply the same adjustment.
                    temp = 2 * temp - num;

                    // If `temp` becomes negative, mark `x` as invalid and break the loop.
                    if(temp < 0) {
                        is_valid = false;
                        break;
                    }
                }
            }
            
            // If the current `x` is valid, return it.
            if(is_valid) return x;
            
            // Otherwise, increment `x` and try again.
            x++;
        }
    }
}
