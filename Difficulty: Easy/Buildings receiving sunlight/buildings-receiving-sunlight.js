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
        // let k = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.longest(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find length of longest subarray of consecutive integers.
    longest(arr) {
        // Initialize variables to track the smallest number seen so far 
        // and the length of the longest valid subarray.
        let previousNumber = -Infinity;
        let maxLength = 0;

        // Iterate through the array.
        for (let currentNumber of arr) {
            // If the current number is greater than or equal to the previous number,
            // it can be part of the consecutive subarray.
            if (currentNumber >= previousNumber) {
                maxLength++;
                previousNumber = currentNumber;  // Update previous number to current.
            }
        }
        return maxLength;  // Return the length of the longest subarray found.
    }
}
