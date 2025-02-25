//{ Driver Code Starts
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let t;
const inputs = [];
rl.on("line", (line) => {
    if (t === undefined) {
        t = parseInt(line.trim());
    } else {
        inputs.push(line.trim());
        if (inputs.length === t) {
            rl.close();
        }
    }
});

rl.on("close", () => {
    const solution = new Solution();
    inputs.forEach((input) => {
        const arr = input.split(" ").map(Number);
        const result = solution.maxOfMins(arr);
        console.log(result.join(" "));
        console.log("~");
    });
});
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    // Function to find the maximum of minimums for every window size.
    maxOfMins(arr) {
        let N = arr.length;
        let result = new Array(N).fill(0); // Array to store the final results
        let nextSmaller = new Array(N).fill(N); // Stores indices of next smaller elements
        let prevSmaller = new Array(N).fill(-1); // Stores indices of previous smaller elements

        // Step 1: Finding the next smaller element for each index
        let stack = [];
        for (let i = 0; i < N; i++) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
                nextSmaller[stack.pop()] = i; // Assign current index as next smaller
            }
            stack.push(i); // Push current index onto the stack
        }

        // Step 2: Finding the previous smaller element for each index
        stack = [];
        for (let i = N - 1; i >= 0; i--) {
            while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
                prevSmaller[stack.pop()] = i; // Assign current index as previous smaller
            }
            stack.push(i); // Push current index onto the stack
        }

        // Step 3: Using nextSmaller and prevSmaller to determine window sizes
        for (let i = 0; i < N; i++) {
            let windowSize = nextSmaller[i] - prevSmaller[i] - 1; // Calculate window size
            result[windowSize - 1] = Math.max(result[windowSize - 1], arr[i]); // Update the result array
        }

        // Step 4: Filling in missing values in the result array
        for (let i = N - 2; i >= 0; i--) {
            result[i] = Math.max(result[i], result[i + 1]); // Ensure non-increasing values
        }

        return result;
    }
}
