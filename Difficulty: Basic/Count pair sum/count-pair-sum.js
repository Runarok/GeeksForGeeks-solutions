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
        let x = parseInt(readLine());
        let arr1 = readLine().split(' ').map(Number);
        let arr2 = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.countPairs(arr1, arr2, x);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to count the number of pairs from arr1 and arr2 whose sum is equal to x
    countPairs(arr1, arr2, x) {
        let counter = 0; // Initialize counter to keep track of valid pairs
        let i = 0; // Pointer for arr1 (starting from the beginning)
        let j = arr2.length - 1; // Pointer for arr2 (starting from the end)
        
        // Continue until we have valid pointers in arr1 and arr2
        while(i < arr1.length && j >= 0) {
            const sum = arr1[i] + arr2[j]; // Calculate the sum of the current pair
            
            if (sum === x) { // If the sum is equal to x, increment the counter
                counter++;
                i++; // Move pointer i to the next element
                j--; // Move pointer j to the previous element
            }
            // If the sum is less than x, move pointer i forward to increase the sum
            else if (sum < x) {
                i++;
            }
            // If the sum is greater than x, move pointer j backward to decrease the sum
            else {
                j--;
            }
        }
        
        return counter; // Return the total count of pairs with sum equal to x
    }
}
