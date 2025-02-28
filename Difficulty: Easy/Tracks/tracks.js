//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Driver code

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
        let ans = ob.ValidTrack(arr);
        if (ans)
            console.log("true");
        else
            console.log("false");
        tc--;
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
    ValidTrack(arr) {
        const numOfPillars = arr.length;

        // Check if the number of pillars is odd
        if (numOfPillars % 2 === 0) return false;

        // Find the index of the middle element
        const middleIndex = Math.floor(numOfPillars / 2);

        // Check if the middle element is 1
        if (arr[middleIndex] !== 1) return false;

        // Calculate the initial difference between the middle element and its left neighbor
        const heightDifference = arr[middleIndex] - arr[middleIndex - 1];

        // Ensure that the difference is non-zero
        if (heightDifference === 0) return false;

        // Iterate through the left side of the track and verify symmetry and constant differences
        for (let i = 0; i < middleIndex; i++) {
            // Check if the array is symmetric from both ends
            if (arr[i] !== arr[numOfPillars - 1 - i]) {
                return false;
            }

            // Ensure that the difference between consecutive elements on the left side is constant
            if (arr[i + 1] - arr[i] !== heightDifference) {
                return false;
            }
        }

        return true;
    }
}
