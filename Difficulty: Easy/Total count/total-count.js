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
        let k = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.totalCount(k, arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - The input array of numbers.
 * @param {number} k - The divisor used to calculate the total count.
 * @return {number} - The total count of division results for each element in the array.
 */

class Solution {

    // Function to calculate the total count of ceiling divisions of each element by k
    totalCount(k, arr) {
        let totalDiv = 0;

        // Iterate through the array and add the ceiling value of each division by k
        for (let num of arr) {
            totalDiv += Math.ceil(num / k);
        }

        // Return the total sum of the ceiling divisions
        return totalDiv;
    }
}
