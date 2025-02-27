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
        let ans = ob.getStar(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
    getStar(arr) {
        // Initialize an array to store the result
        let result = [];
        
        // Iterate over each element in the array
        for (let i = 0; i < arr.length; i++) {
            
            // Check if the current element is a "star" element
            let isStar = true;
            
            // Compare current element with all elements to its right
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] >= arr[i]) {
                    isStar = false;  // Found a larger or equal element, so it's not a "star"
                    break;
                }
            }
            
            // If no larger or equal element was found to the right, add to result
            if (isStar) {
                result.push(arr[i]);
            }
        }
        
        // Return the list of star elements
        return result;
    }
}
