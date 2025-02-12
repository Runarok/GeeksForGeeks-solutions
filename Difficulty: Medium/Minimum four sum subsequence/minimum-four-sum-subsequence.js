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
        // let k = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.minSum(arr);
        console.log(ans);
        // console.log(ans.join(' '));
        tc--;
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    minSum(arr) {
        // Code here
        let n = arr.length;

        // Handling base cases for arrays with less than 4 elements
        if (n == 1) return arr[0];
        if (n == 2) return Math.min(arr[0], arr[1]);
        if (n < 4) {
            return Math.min(arr[0], Math.min(arr[1], arr[2]));
        }

        // Initializing the first 4 elements of the sequence
        let i = arr[0];
        let j = arr[1];
        let k = arr[2];
        let l = arr[3];

        // Iterate through the array starting from the 5th element
        for (let x = 4; x < n; x++) {
            let old = Math.min(i, Math.min(j, Math.min(k, l))); // Find the minimum of the previous 4 values
            i = j; // Shift values for the next iteration
            j = k;
            k = l;
            l = arr[x] + old; // Update the new value based on the sum of the current element and the minimum
        }

        // Return the minimum of the last 4 values
        return Math.min(i, Math.min(j, Math.min(k, l)));
    }
}
