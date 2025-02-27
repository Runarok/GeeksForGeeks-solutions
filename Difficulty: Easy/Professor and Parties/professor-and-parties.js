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
        // let k = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.PartyType(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {boolean}
 */

class Solution {
    // Function to check if there are any duplicate heights in the array.
    // If duplicates exist, return true (Regular Party), else return false (Unique Party).
    PartyType(arr) {
        // Sort the array to easily find duplicates
        arr.sort((a, b) => a - b);
        
        // Check for adjacent duplicates after sorting
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                return true; // Found duplicate, so it's a Regular Party
            }
        }
        
        // No duplicates found, it's a Unique Party
        return false;
    }
}
