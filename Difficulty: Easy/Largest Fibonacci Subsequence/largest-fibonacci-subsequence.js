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
        let ans = ob.findFibSubset(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to find Fibonacci numbers in the subset
    findFibSubset(arr) {
        let k = [...arr]; // Create a copy of the input array
        let max = arr.sort((a, b) => a - b)[arr.length - 1]; // Find the maximum element in the array
        let fib = this.getFib(max); // Get Fibonacci numbers up to the maximum element
        
        let res = [];
        
        // Loop through the array and check if each element is a Fibonacci number
        for (let i = 0; i < k.length; i++) {
            if (fib.includes(k[i])) res.push(k[i]); // If it is, add to the result array
        }
        
        return res; // Return the result array containing Fibonacci numbers
    }
    
    // Function to generate Fibonacci numbers up to the given maximum value
    getFib(max) {
        let res = [0, 1, 1], last = 1, e1 = 1, e2 = 1;
        
        // Generate Fibonacci numbers until the last one exceeds max
        while (max >= (e1 + e2)) {
            last = e1 + e2; // Calculate the next Fibonacci number
            e1 = e2; // Update e1 to the previous Fibonacci number
            e2 = last; // Update e2 to the current Fibonacci number
            res.push(last); // Add the new Fibonacci number to the result array
        }
        
        return res; // Return the array of Fibonacci numbers
    }
}
