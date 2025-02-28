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
        let ans = ob.maxPartitions(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

class Solution {
    maxPartitions(arr) {
        let reqSum = 0;       // Initialize required sum for partition
        let actualSum = 0;    // Initialize actual sum of array elements
        let partitions = 0;   // Initialize partition count
        
        // Loop through each element in the array
        for (let i = 0; i < arr.length; i++) {
            reqSum += i;         // Update the required sum for partition (i starts from 0)
            actualSum += arr[i]; // Update the actual sum with the current element
            
            // Check if the actual sum equals the required sum for partition
            if (actualSum == reqSum) {
                partitions++;    // Increment partition count if sums match
            }
        }
        
        return partitions;  // Return the total number of partitions
    }
}
