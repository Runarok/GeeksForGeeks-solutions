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
        let ans = ob.sumSubarrayMins(arr);
        console.log(ans);
        // colsole.log("~");
        tc--;
    }
}
// } Driver Code Ends


// User function Template for JavaScript
class Solution {
    sumSubarrayMins(arr) {
        const MODULO = 1e9 + 7;
        const length = arr.length;

        // Recursive function to find Previous Less Element (PLE)
        const findPLE = (index, stack = []) => {
            if (index === length) return;
            while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[index]) {
                stack.pop();
            }
            prevLess[index] = stack.length > 0 ? stack[stack.length - 1] : -1;
            stack.push(index);
            findPLE(index + 1, stack);
        };

        // Recursive function to find Next Less Element (NLE)
        const findNLE = (index, stack = []) => {
            if (index === length) return;
            while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[index]) {
                nextLess[stack.pop()] = index;
            }
            stack.push(index);
            findNLE(index + 1, stack);
        };

        // Arrays to store indices of previous less element and next less element
        const prevLess = new Array(length).fill(-1); // Previous Less Element
        const nextLess = new Array(length).fill(length); // Next Less Element

        // Compute PLE and NLE using recursion
        findPLE(0);
        findNLE(0);

        // Recursive function to calculate sum of minimum values in subarrays
        const calculateSum = (index) => {
            if (index === length) return 0;
            const leftRange = index - prevLess[index];   // Distance to previous less element
            const rightRange = nextLess[index] - index; // Distance to next less element
            return (arr[index] * leftRange * rightRange + calculateSum(index + 1)) % MODULO;
        };

        return calculateSum(0);
    }
}
