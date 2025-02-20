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
        let ans = ob.customSort(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    /**
     * Function to sort the first half of the array in ascending order
     * and the second half in descending order.
     * @param {number[]} arr - Input array.
     * @returns {number[]} - Modified array with custom sorting.
     */
    customSort(arr) {
        let firstHalf = [];
        let secondHalf = [];
        
        // Splitting the array into two halves
        for (let i = 0; i < arr.length; i++) {
            if (i < arr.length / 2) {
                firstHalf.push(arr[i]);
            } else {
                secondHalf.push(arr[i]);
            }
        }
        
        // Sorting first half in ascending order
        let sortedFirstHalf = firstHalf.sort((a, b) => a - b);
        
        // Sorting second half in descending order
        let sortedSecondHalf = secondHalf.sort((a, b) => b - a);
        
        // Merging both halves
        return [...sortedFirstHalf, ...sortedSecondHalf];
    }
}
