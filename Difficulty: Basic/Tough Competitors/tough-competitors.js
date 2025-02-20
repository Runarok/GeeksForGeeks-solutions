//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        const solution = new Solution();
        console.log(solution.minDiff(arr));
        console.log("~");
    }
}

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
    minDiff(arr) {
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);

        // Initialize the minimum difference as a large value
        let minDifference = Infinity;

        // Iterate through the array to find the smallest difference between consecutive elements
        for (let i = 0; i < arr.length - 1; i++) {
            minDifference = Math.min(minDifference, arr[i + 1] - arr[i]);
        }

        // Return the smallest difference found
        return minDifference;
    }
}
