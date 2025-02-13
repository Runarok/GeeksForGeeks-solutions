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
        let ans = ob.equilibrium(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    equilibrium(arr) {
        // Calculate the total sum of the array
        let totalSum = arr.reduce((sum, num) => sum + num, 0);
        let leftSum = 0;

        // Iterate through the array to find an equilibrium point
        for (let num of arr) {
            let rightSum = totalSum - leftSum - num; // Compute right sum

            if (leftSum === rightSum) {
                return true; // Return true if equilibrium condition is met
            }
            
            leftSum += num; // Update left sum for the next iteration
        }
        return false; // Return false if no equilibrium point is found
    }
}
