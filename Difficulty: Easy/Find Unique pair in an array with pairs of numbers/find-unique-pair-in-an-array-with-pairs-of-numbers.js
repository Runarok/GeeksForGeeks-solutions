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
        let ans = ob.findUniquePair(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to find unique elements that appear an odd number of times
    findUniquePair(arr) {
        let elementCount = new Map(); // Map to store the frequency of each element
        const newArr = []; // Array to store the result
        
        // Count occurrences of each element
        for (let i = 0; i < arr.length; i++) {
            const currentElement = arr[i];
            elementCount.set(currentElement, (elementCount.get(currentElement) || 0) + 1);
        }

        // Iterate through the element counts
        for (let [key, value] of elementCount.entries()) {
            // If the element appears an odd number of times, add it to the result array
            if (value % 2 === 1) {
                newArr.push(key);
            }
        }

        // Return the array of unique elements sorted in ascending order
        return newArr.sort((a, b) => a - b);
    }
}
