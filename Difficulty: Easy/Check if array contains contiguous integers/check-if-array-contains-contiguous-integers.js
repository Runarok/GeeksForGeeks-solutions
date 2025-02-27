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
        let ans = ob.areElementsContiguous(arr);
        if (ans) {
            console.log("Yes");
        } else {
            console.log("No");
        }
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
    areElementsContiguous(arr) {
        // Create a set to store unique elements from the array
        let uniqueElements = [...new Set(arr)];

        // Find the maximum and minimum elements in the set
        let maxElement = Math.max(...uniqueElements);
        let minElement = Math.min(...uniqueElements);

        // Check if the range between max and min matches the length of the set - 1
        return maxElement - minElement == uniqueElements.length - 1;
    }
}
