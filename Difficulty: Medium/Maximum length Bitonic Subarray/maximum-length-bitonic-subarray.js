//{ Driver Code Starts
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

function main() {
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(Number);
        const solution = new Solution();
        const ans = solution.bitonic(arr);
        console.log(ans);
        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    /**
     * Function to find the length of the longest bitonic subarray.
     * @param {Number[]} arr - Input array
     * @param {Number} n - Size of the array
     * @returns {Number} - Length of the longest bitonic subarray
     */
     bitonic(arr) {
        const n = arr.length;
        if (n === 0) return 0;

        let maxBitonicLength = 1; // Stores the maximum length of a bitonic subarray
        let currentStart = 0; // Tracks the start of the current bitonic subarray
        let nextStart = 0; // Tracks the start of the next potential bitonic subarray

        let index = 0;
        while (index < n - 1) {
            // Find the longest increasing sequence
            while (index < n - 1 && arr[index] <= arr[index + 1]) index++;

            // Find the longest decreasing sequence after the peak
            while (index < n - 1 && arr[index] >= arr[index + 1]) {
                if (arr[index] > arr[index + 1]) nextStart = index + 1;
                index++;
            }

            // Update the maximum bitonic subarray length
            maxBitonicLength = Math.max(maxBitonicLength, index - (currentStart - 1));

            // Move the start to the next potential bitonic sequence
            currentStart = nextStart;
        }

        return maxBitonicLength;
    }
}
