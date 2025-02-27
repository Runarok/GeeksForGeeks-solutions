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
        let ans = ob.nextGreatest(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript

class Solution {
    nextGreatest(arr) {
        // Initialize the maximum element seen so far to -1 (no greater element to the right for the last element)
        let greatestSoFar = -1;

        // Traverse the array from the end to the beginning
        for (let index = arr.length - 1; index >= 0; index--) {
            // Store the current element temporarily
            let currentElement = arr[index];

            // Replace the current element with the greatest element found so far to its right
            arr[index] = greatestSoFar;

            // Update the greatest element if the current element is greater
            if (currentElement > greatestSoFar) {
                greatestSoFar = currentElement;
            }
        }

        // Return the modified array
        return arr;
    }
}
