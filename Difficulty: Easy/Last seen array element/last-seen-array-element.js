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
        // let k = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.lastSeenElement(arr);
        console.log(ans);
        // console.log(ans.join(' '));
        tc--;
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the first non-repeating element in an array.
    lastSeenElement(arr) {
        // Initialize an object to store the last occurrence of each element
        let lastIndexMap = {};
        let earliestIndex = arr.length; // Initialize with a large value (out of array's index range)
        let result = -1; // Default result is -1 if no non-repeating element is found

        // Traverse the array from right to left to record the last occurrence of each element
        for (let i = arr.length - 1; i >= 0; i--) {
            let num = arr[i];
            
            // If this number is not in the map, store its last occurrence (index)
            if (!(num in lastIndexMap)) {
                lastIndexMap[num] = i;
            }
        }

        // Traverse the array from left to right to find the first non-repeating element
        for (let i = 0; i < arr.length; i++) {
            if (lastIndexMap[arr[i]] < earliestIndex) {
                earliestIndex = lastIndexMap[arr[i]]; // Update earliestIndex with the first occurrence of this element
                result = arr[i]; // Set result to the current element
            }
        }

        // Return the result (the last non-repeating element)
        return result;
    }
}
