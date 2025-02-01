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
        let ans = ob.firstNonRepeating(arr);
        console.log(ans);
        tc--;
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    // Function to find the first non-repeating element in an array
    firstNonRepeating(arr) {
        let obj = {};

        // Count occurrences of each element
        for (let i = 0; i < arr.length; i++) {
            obj[arr[i]] = (obj[arr[i]] || 0) + 1;
        }

        // Loop through the array to find the first element with a count of 1
        for (let i = 0; i < arr.length; i++) {
            if (obj[arr[i]] === 1) {
                return arr[i];
            }
        }

        // Return 0 if no non-repeating element is found
        return 0;
    }
}
