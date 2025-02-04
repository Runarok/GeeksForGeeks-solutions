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
        let k = parseInt(readLine());
        let ans = ob.kthLargest(arr, k);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to find the kth largest element in the given array.
    kthLargest(arr, k) {
        let n = arr.length;
        let subarraySums = [];
        
        // Step 1: Compute all subarray sums
        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = i; j < n; j++) {
                sum += arr[j];
                subarraySums.push(sum);
            }
        }

        // Step 2: Sort subarray sums in descending order
        subarraySums.sort((a, b) => b - a);
        
        // Step 3: Return the kth largest sum
        return subarraySums[k - 1];
    }
}
