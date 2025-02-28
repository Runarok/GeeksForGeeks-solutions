//{ Driver Code Starts
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n');
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    const t = parseInt(readLine(), 10);
    const solution = new Solution();

    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number); // Read array input
        const result = solution.checkSorted(arr);
        console.log(result ? "true" : "false");
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    // Function to swap once in case of mismatch
    doOneSwap(n, arr) {
        // Iterate through the array to find the first mismatch
        for (let i = 0; i < n; i++) {
            // If an element is not in its correct position
            if (arr[i] !== i + 1) {
                // Search for the element that should be in the current position
                for (let j = i + 1; j < n; j++) {
                    // When the element is found, perform a swap
                    if (arr[j] === i + 1) {
                        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
                        return; // Exit after one swap
                    }
                }
            }
        }
    }

    // Function to check if sorted or can be sorted with a maximum of two swaps
    checkSorted(arr) {
        let n = arr.length;
        let misMatch = 0;

        // Count the number of mismatches between the current element and its correct position
        for (let i = 0; i < n; i++) {
            if (arr[i] !== i + 1) {
                misMatch++;
            }
        }

        // Edge case: if the array has only one element, it cannot be sorted
        if (n === 1) {
            return false;
        }

        // If the array is already sorted, or if there are exactly 3 mismatches (which can be fixed with 2 swaps)
        if (misMatch === 0 || misMatch === 3) {
            return true;
        }

        // If there are not exactly 4 mismatches, it is not possible to sort with two swaps
        if (misMatch !== 4) {
            return false;
        }

        // Perform two swaps to check if sorting is possible
        this.doOneSwap(n, arr);
        this.doOneSwap(n, arr);

        // Final check to ensure the array is sorted
        for (let i = 0; i < n; i++) {
            if (arr[i] !== i + 1) {
                return false; // If still not sorted, return false
            }
        }

        return true; // Return true if the array is sorted
    }
}
