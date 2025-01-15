//{ Driver Code Starts
// Initial Template for javascript

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
        let ans = ob.arraySum(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr - The array of numbers to sum
 * @return {number} - The sum of the array elements
 */
class Solution {
    arraySum(arr) {
        return arr.reduce((sum, num) => sum + num, 0);
    }
}
