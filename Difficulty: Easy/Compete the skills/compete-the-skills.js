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
        let arr1 = readLine().split(' ').map(Number);
        let arr2 = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.scores(arr1, arr2);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

class Solution {
    // Function to return a list containing the intersection of two arrays.
    scores(arr1, arr2) {
        let k = 0, y = 0;
        
        // Loop through both arrays and compare corresponding elements
        for (let i = 0; i < arr1.length && i < arr2.length; i++) {
            // If element in arr1 is greater than element in arr2
            if (arr1[i] > arr2[i]) {
                k++;  // Increment k for arr1's higher elements
            } 
            // If element in arr2 is greater than element in arr1
            else if (arr1[i] < arr2[i]) {
                y++;  // Increment y for arr2's higher elements
            }
        }
        
        // Return an array with k and y values
        return [k, y];
    }
}
