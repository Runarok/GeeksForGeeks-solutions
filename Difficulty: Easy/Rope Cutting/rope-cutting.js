//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Initial Template for javascript
//  Position this line where user code will be pasted.
//   Driver code
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
        let ans = ob.RopeCutting(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to perform the rope cutting operation
    RopeCutting(arr) {
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);
        
        // Initialize the pointer 'j' to track the position for placing unique cuts
        let j = 0;
        
        // Get the length of the array
        let n = arr.length;
        
        // Calculate the total number of cuts required
        let total = n - 1;
        
        // Iterate through the sorted array
        for (let i = 1; i < n; i++) {
            // If the current element is different from the previous one
            if (arr[i] !== arr[i - 1]) {
                // Place the number of remaining cuts in the current position
                arr[j] = n - i;
                
                // Increment the pointer to the next position
                j++;
            }
        }
        
        // Return the sliced array containing only the necessary cuts
        return arr.slice(0, j);
    }
}
