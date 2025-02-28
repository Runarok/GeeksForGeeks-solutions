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
        let ans = ob.compute(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    // Function to compute the length of the longest non-decreasing subsequence
    compute(arr) {
        let maxLength = 1;  // Variable to store the length of the longest subsequence
        let currLength = 1;  // Variable to track the current length of the subsequence
        
        // Iterate through the array
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] >= arr[i - 1]) {  // If current element is greater than or equal to previous
                currLength++;  // Increment the length of the current subsequence
            } else {
                currLength = 1;  // Reset the length if sequence is broken
            }

            // Update maxLength if the current subsequence is longer
            maxLength = Math.max(maxLength, currLength);
        }
        
        return maxLength;  // Return the length of the longest non-decreasing subsequence
    }
}
