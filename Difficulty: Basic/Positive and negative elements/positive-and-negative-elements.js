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
        let ans = ob.arranged(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to arrange all elements of a given array, alternating positive and negative numbers
    arranged(a) {
        // Arrays to store positive and negative numbers separately
        let p = [];
        let n = [];
        
        // Variables to keep track of the indices for positive and negative numbers
        let k = 0;
        let PIN = 0;
        let NIN = 0;

        // Separate the positive and negative numbers into two different arrays
        for (let i = 0; i < a.length; i++) {
            if (a[i] > 0) {
                p[PIN] = a[i];  // Add positive numbers to the 'p' array
                PIN++;
            } else if (a[i] < 0) {
                n[NIN] = a[i];  // Add negative numbers to the 'n' array
                NIN++;
            }
        }

        // Reset the counter for alternating placement of numbers
        k = 0;

        // Place the positive and negative numbers alternately back into the original array
        for (let i = 0; i < a.length; i = i + 2) {
            a[i] = p[k];  // Place positive number at even index
            a[i + 1] = n[k];  // Place negative number at odd index
            k++;
        }

        // Return the rearranged array
        return a;
    }
}
