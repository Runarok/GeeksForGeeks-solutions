//{ Driver Code Starts
// Initial Template for javascript

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
        let arr1 = readLine().split(' ').map(Number);
        let arr2 = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.findDifference(arr1, arr2);
        console.log(ans);
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to find the number of different elements at corresponding positions in two arrays
    findDifference(arr1, arr2) {
        const n = arr1.length;  // Get the length of the arrays
        let count = 0;  // Initialize count of differences

        // Iterate through the arrays
        for (let i = 0; i < n; i++) {
            if (arr1[i] !== arr2[i]) {  // If elements are different, increment count
                count++;
            }
        }
        
        return count;  // Return the total count of differences
    }
}
