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
        let l = parseInt(readLine());
        let r = parseInt(readLine());
        let arr = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.reverseSubArray(arr, l, r);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for javascript

class Solution {
    // Function to reverse a subarray in the given array between indices l and r (inclusive)
    reverseSubArray(arr, l, r) {
        // Adjusting indices as input is 1-based, so we convert to 0-based indexing
        l = l - 1;
        r = r - 1;

        // Loop until left index is less than or equal to right index
        while (l <= r) {
            // Swap elements at indices l and r
            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;

            // Move the indices towards the center
            l++;
            r--;
        }

        // Return the modified array
        return arr;
    }
}
