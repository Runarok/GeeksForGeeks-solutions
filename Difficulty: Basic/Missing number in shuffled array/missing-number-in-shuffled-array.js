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
        let ans = ob.findMissing(arr1, arr2);
        console.log(ans);
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to find the missing element in array arr2
    findMissing(arr1, arr2) {
        // Sort both arrays in ascending order
        arr1 = arr1.sort((a, b) => a - b);
        arr2 = arr2.sort((x, y) => x - y);
        
        // Initialize pointers for both arrays
        let i = 0, j = 0;

        // Loop through both arrays to find the missing element
        while (i < arr1.length || j < arr2.length) {
            // If elements at corresponding positions don't match, arr1[i] is the missing element
            if (arr1[i] !== arr2[j]) {
                return arr1[i];
            }

            // Move both pointers forward if elements match
            i++;
            j++;
        }
        
        // Return -1 if no element is missing (shouldn't happen in this case)
        return -1;
    }
}
