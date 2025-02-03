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
        let ans = ob.maxProduct(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

class Solution {
    maxProduct(numbers) {
        // Initialize two variables to store the largest and second largest numbers
        let max1 = -Infinity;
        let max2 = -Infinity;

        // Loop through the array to find the two largest numbers
        for (let num of numbers) {
            if (num > max1) {
                max2 = max1;  // Update second largest
                max1 = num;   // Update largest
            } else if (num > max2) {
                max2 = num;   // Update second largest
            }
        }

        // Return the product of the two largest numbers
        return max1 * max2;
    }
}
