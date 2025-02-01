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
        ob.insertionSort(arr);
        console.log(arr.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 *
 * insert
 * @param {number[]} arr
 * @param {number} i
 *
 * insertionSort
 * @param {number[]} arr
 * @param {number} n
 */

class Solution {

    // Function to perform in-place insertion sort
    insertionSort(arr) {
        // Get the length of the array
        const n = arr.length;
        
        // Outer loop to iterate over the array starting from the second element (index 1)
        for (let i = 1; i < n; i++) {
            // Start with the current element and compare it with the elements before it
            let j = i;

            // Inner loop to shift elements that are greater than the current element to the right
            while (j !== 0 && arr[j - 1] > arr[j]) {
                // Swap elements if the previous element is greater than the current element
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];

                // Move the index to the left
                j--;
            }
        }
        
        // Return the sorted array
        return arr;
    }
}
