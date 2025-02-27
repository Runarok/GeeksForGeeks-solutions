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
        // let k = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.getSingle(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    getSingle(arr) {
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);
        
        // Use a map to count occurrences of each number
        let countMap = {};
        
        for (let i = 0; i < arr.length; i++) {
            countMap[arr[i]] = (countMap[arr[i]] || 0) + 1;
            
            // Check if the next element is different
            if (arr[i] !== arr[i + 1]) {
                // If frequency is odd, return this number
                if (countMap[arr[i]] % 2 !== 0) {
                    return arr[i];
                } else {
                    // Clear the count for this element
                    delete countMap[arr[i]];
                }
            }
        }
        
        // Fallback return (should not be needed for valid input)
        return 0;
    }
}
