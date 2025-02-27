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
        let ans = ob.findPairs(arr);
        // console.log(ans);
        if (ans) {
            console.log("true");
        } else {
            console.log("false");
        }
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript

class Solution {
    findPairs(arr) {
        // Total number of elements
        const n = arr.length;

        // Map to track sums we have seen
        const sumMap = new Map();

        // Iterate through all pairs (i, j)
        for (let i = 0; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                const pairSum = arr[i] + arr[j];

                // If this sum already exists in the map, it means another pair formed the same sum
                if (sumMap.has(pairSum)) {
                    return true;
                }

                // Store the sum in the map
                sumMap.set(pairSum, 1);
            }
        }

        // No such pairs found
        return false;
    }
}
