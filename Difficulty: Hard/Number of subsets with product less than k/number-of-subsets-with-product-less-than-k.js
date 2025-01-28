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
        let ans = ob.numOfSubsets(arr, k);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

class Solution {
    numOfSubsets(arr, k) {
        // This helper function will recursively explore subsets
        const findSubsets = (index, product) => {
            if (index === arr.length) {
                // Base case: We are at the end of the array, check if product is <= k
                return product <= k ? 1 : 0;
            }

            // Option 1: Exclude current element
            let count = findSubsets(index + 1, product);
            
            // Option 2: Include current element, and multiply to the product
            if (product * arr[index] <= k) {
                count += findSubsets(index + 1, product * arr[index]);
            }
            
            return count;
        };
        
        // We start recursion with index 0 and product 1
        return findSubsets(0, 1) - 1;  // Subtract 1 to exclude the empty subset
    }
}
