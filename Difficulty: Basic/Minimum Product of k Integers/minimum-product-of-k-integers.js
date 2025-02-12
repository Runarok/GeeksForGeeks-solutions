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
        let k = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.minProduct(arr, k);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to find the minimum product of a triplet.
    minProduct(arr, k) {
        // Sorting the array in ascending order.
        arr.sort((a, b) => a - b);

        // Defining the modulo value to prevent overflow.
        const MODULO = 1000000007;

        // Initializing the product result.
        let product = 1;

        // Taking the minimum of array length and k.
        let limit = Math.min(arr.length, k);

        // Calculating the product of the first k elements.
        for (let i = 0; i < limit; i++) {
            product = (product * arr[i]) % MODULO;
        }

        return product;
    }
}
