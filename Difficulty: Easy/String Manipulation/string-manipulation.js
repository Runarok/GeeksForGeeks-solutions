//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    while (t--) {
        let line = readLine();
        let arr = line.split(' ');
        let ob = new Solution();
        console.log(ob.removeConsecutiveSame(arr));
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to remove consecutive same elements from the array
    removeConsecutiveSame(arr) {
        // Initialize the stack and get the length of the array
        let N = arr.length;
        let stk = [];
        
        // Iterate over each element in the array
        for (let i = 0; i < N; i++) {
            // If the stack is not empty and the top element matches the current element, pop the top
            if (stk.length > 0 && stk[stk.length - 1] === arr[i]) {
                stk.pop();
            } else {
                // Otherwise, push the current element onto the stack
                stk.push(arr[i]);
            }
        }
        
        // Return the length of the stack (final size after removing consecutive elements)
        return stk.length;
    }
}
