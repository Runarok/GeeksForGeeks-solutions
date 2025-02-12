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
        let ans = ob.rotateDelete(arr);
        console.log(ans);
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
    rotateDelete(arr) {
        let k = 1;  // Initialize k to 1
        let sz = arr.length;  // Get the size of the array

        // Continue while k is less than or equal to half the size of the array
        while (k <= Math.floor(sz / 2)) {
            // Rotate the array by moving the last element to the start
            arr.unshift(arr.pop());

            // Remove the element at index `k`
            arr.splice(arr.length - k, 1);
            k++;  // Increment k for the next iteration
        }

        // Return the first element of the array
        return arr[0];
    }
}

