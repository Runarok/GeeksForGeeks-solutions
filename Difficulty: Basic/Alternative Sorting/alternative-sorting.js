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
        let ans = ob.alternateSort(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript

class Solution {
    alternateSort(arr) {
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);

        // Initialize pointers for the start and end of the array
        let start = 0, end = arr.length - 1;

        // Create an array to hold the alternately sorted elements
        let arr2 = [];

        // Continue until all elements are processed
        while (start <= end) {
            // Push the element from the end of the sorted array to the result
            if (start <= end) {
                arr2.push(arr[end]);
                end--;
            }

            // Push the element from the start of the sorted array to the result
            if (start <= end) {
                arr2.push(arr[start]);
                start++;
            }
        }

        // Return the new array with alternating elements
        return arr2;
    }
}
