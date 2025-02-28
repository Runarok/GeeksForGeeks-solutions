//{ Driver Code Starts
function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        const k = parseInt(readLine());
        const solution = new Solution();
        if (solution.canFillContainer(arr, k)) {
            console.log("true");
        } else {
            console.log("false");
        }
        console.log("~");
    }
}

// Adapted for the provided input format
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

// } Driver Code Ends

class Solution {
   
    // Memoization map to store previously computed results for subproblems
    map = {};

    // Helper function to check if it's possible to fill the container with the given capacity
    fillCont(arr, capacity) {
        // If the remaining capacity is 0, it means we have successfully filled the container
        if (capacity == 0) {
            return true;
        }

        // If the remaining capacity is less than 0, it means we cannot fill the container
        if (capacity < 0) {
            return false;
        }

        // Check if the result for this capacity is already computed and stored in the map
        if (this.map[capacity]) {
            return this.map[capacity];
        }

        // Initialize a variable to store the result for the current subproblem
        let globalResult = false;

        // Iterate through each item in the array to check if we can fill the container
        for (let i = 0; i < arr.length; ++i) {
            // Recursively check if we can fill the container with the current item subtracted from capacity
            let result = this.fillCont(arr, capacity - arr[i]);

            // If it's possible, set the result to true and break out of the loop
            if (result) {
                globalResult = true;
                break;
            }
        }

        // Store the result for the current capacity in the map for future reference
        this.map[capacity] = globalResult;

        // Return the result for the current capacity
        return globalResult;
    }

    // Main function to check if we can fill the container with a given capacity 'k'
    canFillContainer(arr, k) {
        // Call the helper function to check if we can fill the container with capacity 'k'
        return this.fillCont(arr, k);
    }
}
