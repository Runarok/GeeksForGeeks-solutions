//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (input) => { inputLines.push(input); });

rl.on('close', () => {
    let t = parseInt(inputLines[currentLine++], 10);
    for (let i = 0; i < t; i++) {
        let k = parseInt(inputLines[currentLine++], 10);
        let arr1 = inputLines[currentLine++].split(' ').map(Number);
        let arr2 = inputLines[currentLine++].split(' ').map(Number);

        let solution = new Solution();
        let ans = solution.isPossible(k, arr1, arr2);
        if (ans) {
            console.log("true");
        } else {
            console.log("false");
        }
        console.log("~");
    }
});
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to check if it is possible to pair elements from two arrays such that their sum is >= k
    isPossible(k, arr1, arr2) {
        // Sort arr1 in ascending order (smallest to largest)
        arr1.sort((a, b) => a - b);
        
        // Sort arr2 in descending order (largest to smallest)
        arr2.sort((a, b) => b - a);
        
        // Iterate through the arrays to check if the sum of each pair is >= k
        for (let i = 0; i < arr1.length; i++) {
            // If the sum of the current pair is less than k, return false
            if (arr1[i] + arr2[i] < k) {
                return false;
            }
        }

        // If all pairs meet the condition, return true
        return true;
    }
}
