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
        let ans = ob.leftElement(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript

class Solution {
    leftElement(arr) {
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);
        
        // Calculate the middle index of the array
        let val = arr.length;
        let d = Math.floor(val / 2);

        // If the array has an even length, return the element before the middle index
        if (val % 2 === 0) return arr[d - 1];

        // If the array has an odd length, return the element at the middle index
        return arr[d];
    }
}
