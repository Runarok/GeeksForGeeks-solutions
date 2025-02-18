//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Initial Template for javascript
//  Position this line where user code will be pasted.
//   Driver code
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
        let k = parseInt(readLine());
        let ans = ob.reducingWalls(arr, k);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
    // Function to reduce the walls where each wall height is greater than k
    reducingWalls(arr, k) {
        let count = 0;
        // Iterate through each wall height in the array
        for (let i = 0; i < arr.length; i++) {
            // If the current wall height is greater than k, calculate how many times it exceeds k
            if (arr[i] > k) {
                // Add the number of reductions needed to bring the wall down to k
                count += Math.ceil((arr[i] - k) / k);
            }
        }
        // Return the total number of reductions needed for all walls
        return count;
    }
}
