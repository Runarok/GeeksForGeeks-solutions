//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printArray(arr) {
    let s = "";
    for (let i of arr) {
        s = s + i + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let V = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.profit(V);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    profit(V) {
        let n = V.length;
        let stack = [];
        let totalProfit = 0;

        // Traverse the array from right to left
        for (let i = n - 1; i >= 0; i--) {
            // Find the nearest greater element to the right
            while (stack.length && V[stack[stack.length - 1]] < V[i]) {
                stack.pop();
            }

            // Calculate profit
            if (stack.length) {
                totalProfit += V[stack[stack.length - 1]] - V[i];
            } else {
                totalProfit += V[i];
            }

            // Push current element index to the stack
            stack.push(i);
        }

        return totalProfit;
    }
}
