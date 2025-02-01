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
        ob.rearrange(arr);
        console.log(arr.join(' '));
        // console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 */

class Solution {
    // Function to rearrange the array elements alternately.
    rearrange(arr) {
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);
        
        let min = 0;    // Pointer to the minimum element in the sorted array
        let max = arr.length - 1;    // Pointer to the maximum element in the sorted array
        let newValue = arr[arr.length - 1] + 1;    // Value to use for encoding (helps avoid overflow when storing multiple values in one index)

        // Iterate through the array to rearrange elements alternately
        for (let i = 0; i <= arr.length - 1; i++) {
            if ((i % 2) === 0) {
                // For even indices, store the maximum element at the current index
                arr[i] += (arr[max] % newValue) * newValue;
                max--;
            } else {
                // For odd indices, store the minimum element at the current index
                arr[i] += (arr[min] % newValue) * newValue;
                min++;
            }
        }
        
        // Extract the final values by dividing by newValue to get the original values back
        for (let i = 0; i <= arr.length - 1; i++) {
            arr[i] = Math.floor(arr[i] / newValue);
        }
    }
}
