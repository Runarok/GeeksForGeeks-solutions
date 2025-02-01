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
        let ans = ob.findMaxSum(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
    findMaxSum(arr) {
        let prev2 = 0;  // Maximum sum excluding current element at i-2
        let prev1 = arr[0];  // Maximum sum including the first element

        // Loop through the rest of the array, starting from index 1
        for (let i = 1; i < arr.length; i++) {
            // Choose the maximum of excluding or including the current element
            const t = Math.max(prev1, prev2 + arr[i]);

            // Update prev2 and prev1 for the next iteration
            prev2 = prev1;
            prev1 = t;
        }

        // The final value of prev1 holds the maximum sum
        return prev1;
    }
}
