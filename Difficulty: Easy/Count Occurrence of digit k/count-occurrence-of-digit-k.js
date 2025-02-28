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
        let ans = ob.num(k, arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - An array of numbers
 * @param {number} k - The digit to search for in each number of the array
 * @returns {number} - The count of occurrences of digit 'k' in all numbers of the array
 */

class Solution {
    // Function to count how many times the digit 'k' appears in all numbers of the array
    num(k, arr) {
        // Initialize the count of occurrences of digit 'k'
        let count = 0;

        // Iterate through each number in the array
        for (let i = 0; i < arr.length; i++) {
            // Process each number by extracting its digits
            while (arr[i] > 0) {
                // If the last digit of the current number equals 'k', increment the count
                if (arr[i] % 10 == k) {
                    count++;
                }
                
                // Remove the last digit of the current number
                arr[i] = Math.floor(arr[i] / 10);
            }
        }

        // Return the total count of digit 'k' occurrences
        return count;
    }
}
