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
        let ans = ob.countryAtWar(arr1, arr2);
        console.log(ans);
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

// User function Template for javascript
class Solution {
    // Function to determine which country has more points or if it's a draw
    countryAtWar(arr1, arr2) {
        // Initialize scores for both countries
        let scoreA = 0, scoreB = 0;

        // Iterate through both arrays and compare the corresponding elements
        arr1.forEach((a, i) => {
            // If a > arr2[i], increment scoreA
            // If a < arr2[i], increment scoreB
            // If a === arr2[i], no score change
            a > arr2[i] ? scoreA++ : a < arr2[i] ? scoreB++ : null;
        });

        // Return the result based on the scores
        return scoreA === scoreB ? 'DRAW' : scoreA > scoreB ? 'A' : 'B';
    }
}
