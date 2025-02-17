//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (input) => { inputLines.push(input); });

rl.on('close', () => {
    const t = parseInt(inputLines[currentLine++], 10);
    const ob = new Solution();

    for (let i = 0; i < t; i++) {
        const arr = inputLines[currentLine++].split(' ').map(Number);
        console.log(ob.maxDays(arr));
        console.log("~")
    }
});
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    maxDays(arr) {
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);

        // Return the largest value, which is the last element after sorting
        let light = arr[arr.length - 1];
        return light;
    }
}
