//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Driver code
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
        let k = parseInt(readLine());
        let ans = ob.firstElementKTime(arr, k);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n
 * @param {number} k
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the first element that occurs k times in the array
    firstElementKTime(arr, k) {
        let n = arr.length;

        // Create a map to store the frequency of each element
        let mp = new Map();

        // Iterate over each element in the array
        for (let i = 0; i < n; i++) {
            // Update the count of the current element in the map
            mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);

            // Check if the current element's frequency equals 'k'
            if (mp.get(arr[i]) === k) {
                // If found, return the element as it is the first to reach 'k'
                // occurrences
                return arr[i];
            }
        }

        // If no element occurs 'k' times, return -1
        return -1;
    }
}
