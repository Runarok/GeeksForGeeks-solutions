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
        let ans = ob.maxValueOfExpression(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to find the maximum value of the given expression.
    maxValueOfExpression(arr) {
        const n = arr.length;

        // Initialize variables for storing the maximum and minimum values
        let max1 = -Infinity, min1 = Infinity;
        let max2 = -Infinity, min2 = Infinity;

        // Iterate through the array to calculate the expressions
        for (let i = 0; i < n; i++) {
            const x = arr[i] + i; // Expression 1: arr[i] + i
            const y = arr[i] - i; // Expression 2: arr[i] - i

            // Update max1 and min1 for the first expression
            max1 = Math.max(max1, x);
            min1 = Math.min(min1, x);

            // Update max2 and min2 for the second expression
            max2 = Math.max(max2, y);
            min2 = Math.min(min2, y);
        }

        // Return the maximum difference between the two expressions
        return Math.max(max1 - min1, max2 - min2);
    }
}
