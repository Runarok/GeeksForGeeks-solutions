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
        let ans = ob.maxNtype(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    maxNtype(arr) {
        // Get the length of the array
        let arrayLength = arr.length;
        
        // Initialize variables to store the maximum and minimum values along with their indices
        let maxValue = arr[0];
        let minValue = arr[0];
        let maxIndex = 0;
        let minIndex = 0;
        
        // Iterate through the array to find max and min values along with their indices
        for (let i = 0; i < arrayLength; i++) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
                maxIndex = i;
            }
            if (arr[i] < minValue) {
                minValue = arr[i];
                minIndex = i;
            }
        }

        // Determine the type based on max and min positions
        if (maxIndex === arrayLength - 1 && minIndex === 0) {
            return 1; // Maximum at the end, minimum at the start
        }
        if (maxIndex === 0 && minIndex === arrayLength - 1) {
            return 2; // Maximum at the start, minimum at the end
        }
        if (maxIndex > minIndex) {
            return 3; // Maximum appears after minimum
        }
        return 4; // Maximum appears before minimum
    }
}
