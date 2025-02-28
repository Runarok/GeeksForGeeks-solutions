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
        let arr = readLine().split(' ').map(Number);
        let q = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.findMean(arr, q);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number[]} queries
 * @param {number} n
 * @param {number} q
 * @return {number[]}
 */

class Solution {
  findMean(arr, queries, n, q) {
    // Initialize pointers for the queries array
    let L = 0, R = 1, i;
    let ar = []; // Array to store the means of each query
    
    // Process each query by iterating over the queries array
    while (R < queries.length) {
        let sum = 0, mean = 0;

        // Calculate the sum of elements between the indices specified by the current query
        for (i = queries[L]; i <= queries[R]; i++) {
            sum = sum + arr[i];
        }

        // Calculate the mean and store it in the array
        mean = Math.floor(sum / ((queries[R] - queries[L]) + 1));
        ar.push(mean);

        // Move to the next query (increment L and R by 2 to process the next query pair)
        L = L + 2;
        R = R + 2;
    }    
    
    // Return the array of calculated means
    return ar;
  }
}
