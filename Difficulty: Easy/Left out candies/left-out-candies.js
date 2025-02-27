//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Driver code
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
        let ans = ob.leftCandies(arr[0], arr[1]);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
    leftCandies(n, m) {
        // Initialize the counter for turn
        let i = 1;

        // Loop until there are no more candies left to distribute
        while (m >= 1) {
            if (i > n) {
                // If the current person index exceeds n, reset to 1
                i = 1;
            }

            if (m - i >= 0) {
                // Distribute 'i' candies to the current person if possible
                m -= i;
            } else {
                // If not enough candies left for current person, break the loop
                break;
            }

            // Move to the next person
            i++;
        }

        // Return the remaining candies after distribution
        return m;
    }
}
