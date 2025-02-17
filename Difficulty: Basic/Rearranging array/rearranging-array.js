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
        let ans = ob.Rearrange(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

class Solution {
    // Function to rearrange the array such that the first half remains in place 
    // and the second half is reversed and interleaved with the first half.
    Rearrange(arr) {
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);

        // Find the index to split the array into two halves
        let halfIndex = Math.floor((arr.length - 1) / 2);

        // Split the array into two parts
        let ar1 = arr.slice(0, halfIndex + 1);  // First half
        let ar2 = arr.slice(halfIndex + 1).reverse();  // Second half (reversed)

        // Create a new array to interleave the two halves
        let New = [];
        for (let i = 0; i < ar1.length; i++) {
            New.push(ar1[i]);  // Add element from the first half
            if (i < ar2.length) New.push(ar2[i]);  // Add element from the reversed second half
        }

        // Return the newly rearranged array
        return New;
    }
}
