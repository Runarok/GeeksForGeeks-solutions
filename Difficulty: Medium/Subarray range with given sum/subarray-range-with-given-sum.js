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
        let tar = parseInt(readLine());
        let ob = new Solution();
        let ans = ob.subArraySum(arr, tar);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - The input array of numbers.
 * @param {number} tar - The target sum to find in subarrays.
 * @returns {number} - The count of subarrays that sum up to the target.
 */
class Solution {
    // Function to count the number of subarrays that add up to the given sum.
    subArraySum(arr, tar) {
        // Map to store the prefix sum frequencies
        let prefixSumMap = new Map();
        let currentSum = 0;
        let count = 0;

        // Iterate through the array
        for (let i = 0; i < arr.length; i++) {
            // Update the running prefix sum
            currentSum += arr[i];

            // If the current prefix sum equals the target, increment count
            if (currentSum === tar) {
                count++;
            }

            // Check if a subarray with sum 'tar' exists by looking at (currentSum - tar)
            if (prefixSumMap.has(currentSum - tar)) {
                count += prefixSumMap.get(currentSum - tar);
            }

            // Update the prefix sum frequency in the map
            prefixSumMap.set(currentSum, (prefixSumMap.get(currentSum) || 0) + 1);
        }

        // Return the total count of subarrays matching the target sum
        return count;
    }
}
