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
        let ans = ob.countFlips(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to count the number of flips required to make all elements 0.
    countFlips(bulbs) {
        let pressCount = 0; // Variable to count the number of flips
        let currentState = 0; // This will keep track of the effective state (on/off) as we traverse the bulbs

        // Iterate through the array of bulbs
        for (let i = 0; i < bulbs.length; i++) {
            // Determine the effective state of the current bulb
            if ((bulbs[i] + currentState) % 2 === 0) {
                // If the effective state is 0 (off), we need to toggle the switch
                pressCount++;
                currentState++; // Pressing the switch toggles the state of the bulb
            }
        }

        // Return the total number of presses required
        return pressCount;
    }
}
