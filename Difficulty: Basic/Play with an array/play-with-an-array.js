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
        let ans = ob.formatArray(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    formatArray(arr) {
        // Sorting the array in ascending order
        arr.sort((a, b) => a - b);
        const n = arr.length;
        let frequencyCount = 1;
        let currentElement = arr[n - 1];

        // Loop through the array from the second last element to the first
        for (let i = n - 2; i >= 0; i--) {
            if (currentElement === arr[i]) {
                frequencyCount++;
            } else {
                frequencyCount--;
                if (frequencyCount === 0) {
                    frequencyCount = 1;
                    currentElement = arr[i];
                }
            }
        }

        // Return "true" if the condition is met, otherwise "false"
        return frequencyCount <= 1 ? "true" : "false";
    }
}
