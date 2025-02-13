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
        let n = parseInt(readLine());
        // let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.fact(n);
        // console.log(ans);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to find the first digit and the number of digits in n!
    fact(n) {
        if (n === 0 || n === 1) return [1, 0]; // Base case: 0! and 1! both equal 1
    
        let logSum = 0; // Stores the sum of log base 10 of factorial components
        
        // Compute log10 of factorial sum iteratively
        for (let i = 1; i <= n; i++) {
            logSum += Math.log10(i);
        }
        
        const powOf10 = Math.floor(logSum); // Number of digits in n!
        const fractionalPart = logSum - powOf10; // Extract the fractional part
        const firstDigit = Math.floor(Math.pow(10, fractionalPart)); // Compute the first digit
    
        return [firstDigit, powOf10];
    }
}
