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
        let ans = ob.getTriangle(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

const MOD = 10**9 + 7;

class Solution {
    getTriangle(arr) {
        let n = arr.length;
        let result = [];
        
        // We start by adding the last row (the input array) to the result
        result.push(...arr);
        
        // Start from the second last row
        while (n > 1) {
            let tempArr = [];
            // Construct the row by summing adjacent elements in the row below it
            for (let i = 0; i < n - 1; i++) {
                tempArr.push((arr[i] + arr[i + 1]) % MOD);
            }
            // Set arr to the new row and update n
            arr = tempArr;
            n--;
            // Push the new row at the beginning of result
            result.unshift(...arr);
        }
        
        return result;
    }
}


