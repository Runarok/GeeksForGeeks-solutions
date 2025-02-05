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
        let arr1 = readLine().split(' ').map(Number);
        let arr2 = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.findSum(arr1, arr2);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

class Solution {
    // Function to add two arrays representing numbers.
    findSum(arr1, arr2) {
        const result = []; // Array to store the result
        let carry = 0; // Variable to keep track of carry from previous addition

        // Pointers to traverse both arrays from the last digit (least significant digit)
        let i = arr1.length - 1;
        let j = arr2.length - 1;

        // Continue processing until both arrays are exhausted and there's no carry left
        while (i >= 0 || j >= 0 || carry > 0) {
            // Get the current digit from arr1 or 0 if arr1 is out of bounds
            const digit1 = i >= 0 ? arr1[i] : 0;

            // Get the current digit from arr2 or 0 if arr2 is out of bounds
            const digit2 = j >= 0 ? arr2[j] : 0;

            // Calculate the sum of the digits along with the carry from the previous addition
            const sum = digit1 + digit2 + carry;

            // Store the last digit of the sum (mod 10) in the result
            result.push(sum % 10);

            // Update the carry for the next iteration (carry is the quotient of sum divided by 10)
            carry = Math.floor(sum / 10);

            // Move the pointers to the next digit
            i--;
            j--;
        }

        // Reverse the result array to get the correct number (since we added from least to most significant digit)
        return result.reverse();
    }
}
