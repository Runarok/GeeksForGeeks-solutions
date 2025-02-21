//{ Driver Code Starts
// Driver code
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.shortestUnorderedSubarray(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to find the length of the shortest unordered subarray
    // in a given array.
    shortestUnorderedSubarray(arr) {
        let n = arr.length;

        // If the array has one or no elements, it is already sorted
        if (n <= 1) return 0;

        let left = -1, right = -1;

        // Find the first pair where the order breaks (first decrease)
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                left = i;
                break;
            }
        }

        // If no break is found, the array is already sorted
        if (left === -1) return 0;

        // Find the last pair where the order breaks (last decrease)
        for (let i = n - 1; i > 0; i--) {
            if (arr[i] < arr[i - 1]) {
                right = i;
                break;
            }
        }

        // Find the minimum and maximum values in the unordered part of the array
        let minUnordered = Infinity;
        let maxUnordered = -Infinity;

        for (let i = left; i <= right; i++) {
            minUnordered = Math.min(minUnordered, arr[i]);
            maxUnordered = Math.max(maxUnordered, arr[i]);
        }

        // Extend the left boundary if necessary (find the correct position for minUnordered)
        while (left > 0 && arr[left - 1] > minUnordered) {
            left--;
        }

        // Extend the right boundary if necessary (find the correct position for maxUnordered)
        while (right < n - 1 && arr[right + 1] < maxUnordered) {
            right++;
        }

        // Return the length of the shortest unordered subarray
        return right - left + 1;
    }
}
