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
        let arr1 = readLine().split(' ').map(Number);
        let arr2 = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.intersection(arr1, arr2);
        if (ans.length > 0) {
            console.log(ans.join(' '));
        } else {
            console.log("[]");
        }
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

class Solution {
    // Function to return a list containing the intersection of two arrays.
    intersection(arr1, arr2) {
        // Initialize two pointers for both arrays
        let i = 0, j = 0;
        let result = [];
        
        // Iterate over both arrays while both pointers are within bounds
        while (i < arr1.length && j < arr2.length) {
            // If the elements at both pointers are equal, add to the result
            if (arr1[i] === arr2[j]) {
                // Add element to the result if it's not already present (to avoid duplicates)
                if (result[result.length - 1] !== arr1[i]) {
                    result.push(arr1[i]);
                }
                i++; // Move pointer in arr1
                j++; // Move pointer in arr2
            }
            // If arr1[i] is smaller, move pointer in arr1
            else if (arr1[i] < arr2[j]) {
                i++;
            }
            // If arr2[j] is smaller, move pointer in arr2
            else {
                j++;
            }
        }
        
        // Return the result array containing the intersection of both arrays
        return result;
    }
}
