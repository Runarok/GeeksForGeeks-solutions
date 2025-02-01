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
        let ans = ob.calculateSpan(arr);
        console.log(ans.join(' '));
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

class Solution {
    // Function to calculate the span of stock's price for all n days.
    calculateSpan(arr) {
        let result = [];  // To store the span for each day
        let stack = [];   // Stack to store the indices of the days
        
        // Loop through all the days
        for (let i = 0; i < arr.length; i++) {
            // If the stack is empty, it means no previous day has a higher price
            if (stack.length === 0) {
                result.push(-1);
            } else {
                // If the price of the current day is less than or equal to the price on top of the stack
                if (arr[stack[stack.length - 1]] > arr[i]) {
                    result.push(stack[stack.length - 1]);
                } else {
                    // Pop from the stack until we find a price that is greater than the current day's price
                    while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
                        stack.pop();
                    }
                    // If stack is empty, it means the current day's price is the highest so far
                    if (stack.length === 0) {
                        result.push(-1);
                    } else {
                        result.push(stack[stack.length - 1]);
                    }
                }
            }
            // Push the current day index to the stack
            stack.push(i);
        }
        
        // Calculate the span for each day (current day index - previous day index with higher price)
        for (let i = 0; i < arr.length; i++) {
            result[i] = i - result[i];
        }
        
        return result;  // Return the span for each day
    }
}
