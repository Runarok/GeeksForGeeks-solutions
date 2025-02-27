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
        let k = parseInt(readLine());
        let ob = new Solution();
        let ans = ob.checkDuplicatesWithinK(arr, k);
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
// Back-end complete function Template for javascript
class Solution {
    checkDuplicatesWithinK(arr, k) {
        // Map to store the last index of each element
        const lastIndexMap = {};

        for (let i = 0; i < arr.length; i++) {
            // If the element already exists in the map
            if (lastIndexMap[arr[i]] !== undefined) {
                // Check if the difference between indices is within k
                if (i - lastIndexMap[arr[i]] <= k) {
                    return true;
                }
            }
            // Update the last seen index for the current element
            lastIndexMap[arr[i]] = i;
        }

        // No duplicates found within the given range k
        return false;
    }
}
