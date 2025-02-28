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
        let ans = ob.bitonicGenerator(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

function sortEvenOdd(arr) {
    // Separate even-placed and odd-placed elements based on index
    let evenPlaced = [];
    let oddPlaced = [];

    // Loop through the array and classify elements based on index parity
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenPlaced.push(arr[i]);  // Even indices
        } else {
            oddPlaced.push(arr[i]);   // Odd indices
        }
    }

    // Sort even-placed elements in increasing order
    evenPlaced.sort((a, b) => a - b);
    // Sort odd-placed elements in decreasing order
    oddPlaced.sort((a, b) => b - a);

    // Combine sorted even-placed and odd-placed elements
    return evenPlaced.concat(oddPlaced);
}

class Solution {
    // Function to generate a bitonic sequence by sorting even and odd placed elements
    bitonicGenerator(arr) {
        // Sort the array by rearranging even and odd placed elements
        const result = sortEvenOdd(arr);
        return result;  // Return the resulting array
    }
}
