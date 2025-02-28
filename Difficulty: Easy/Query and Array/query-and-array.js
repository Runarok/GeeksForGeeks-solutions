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
        let k = parseInt(readLine());
        let ans = ob.findX(arr, k);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to find the element in the array with minimum number of bits flipped to equal k
    findX(arr, k) {
        let minFlips = Infinity; // Initialize the minimum number of flips to infinity
        let minX = -1; // Initialize the result variable to store the value with minimum flips
        
        // Iterate through each element in the array
        for (const x of arr) {
            // Calculate the number of bits flipped between x and k
            const flips = this.countBits(x ^ k);
            
            // If the number of flips is less than the current minimum, update minFlips and minX
            if (flips < minFlips) {
                minFlips = flips;
                minX = x;
            }
            // If the number of flips is equal to the current minimum, select the smaller number
            else if (flips === minFlips && x < minX) minX = x;
        }
        
        return minX; // Return the value with minimum flips
    }

    // Helper function to count the number of set bits (1s) in a number
    countBits(n) {
        let count = 0;
        while (n > 0) {
            count += n & 1; // Increment count if the least significant bit is 1
            n >>= 1; // Right shift the number to check the next bit
        }
        return count; // Return the total count of 1s
    }
}
