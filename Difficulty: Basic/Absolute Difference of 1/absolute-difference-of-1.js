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
        let ans = ob.getDigitDiff1AndLessK(arr, k);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    getDigitDiff1AndLessK(arr, k) {
        let result = [];

        for (let num of arr) {
            // Check if number is within the limit and has at least two digits
            if (num < k && num >= 10) {
                let isValid = true;
                let current = num;

                // Check if every adjacent digit has a difference of exactly 1
                while (current >= 10) {
                    let lastDigit = current % 10;
                    let secondLastDigit = Math.floor((current / 10) % 10);

                    if (Math.abs(secondLastDigit - lastDigit) !== 1) {
                        isValid = false; // If any pair fails, mark as invalid
                        break; // Stop further checking
                    }

                    current = Math.floor(current / 10);
                }

                // Add the number to the result if it satisfies the condition
                if (isValid) {
                    result.push(num);
                }
            }
        }

        return result;
    }
}
