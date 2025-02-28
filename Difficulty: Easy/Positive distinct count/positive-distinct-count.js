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
        let ans = ob.distinctCount(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to count the number of distinct positive values in the array
    distinctCount(arr) {
        // Create a set to store distinct positive values
        const posValues = new Set();

        // Iterate through the array and add positive values to the set
        for (let num of arr) {
            if (num > 0) posValues.add(num);
        }

        // Return the size of the set, which represents the count of distinct positive values
        return posValues.size;
    }
}
