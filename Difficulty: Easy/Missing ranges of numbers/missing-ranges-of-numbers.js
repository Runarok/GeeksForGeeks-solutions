//{ Driver Code Starts
// Initial Template for javascript
const readline = require('readline');

const rl = readline.createInterface(
    {input : process.stdin, output : process.stdout, terminal : false});

const inputLines = [];
rl.on('line', (line) => { inputLines.push(line); });

rl.on('close', () => {
    let idx = 0;
    const t = parseInt(inputLines[idx++], 10);
    for (let test = 0; test < t; test++) {
        if (idx >= inputLines.length) break;

        const lower = parseInt(inputLines[idx++], 10);
        if (idx >= inputLines.length) break;

        const upper = parseInt(inputLines[idx++], 10);
        if (idx >= inputLines.length) {
            // If there's no array line, assume empty array
            arr = [];
        }

        let arr = [];
        if (idx < inputLines.length && inputLines[idx].trim() !== '') {
            arr = inputLines[idx].trim().split(/\s+/).map(Number);
            idx++;
        } else {
            idx++;
        }

        const solution = new Solution();
        const res = solution.missingRanges(arr, lower, upper);

        if (res.length === 0) {
            console.log("[]");
        } else {
            res.forEach(range => { console.log(`${range[0]} ${range[1]}`); });
        }
        console.log("~");
    }
});

// Position this line where user code will be pasted.
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    missingRanges(arr, lower, upper) {
        // Initialize the result array to store the missing ranges
        let n = arr.length;
        let a = [];
        let prev = lower - 1;

        // Iterate through the array, including a dummy value for the upper bound
        for (let i = 0; i <= n; i++) {
            let curr = 0;
            // Set current value as arr[i] if within bounds, else upper+1
            if (i < n) {
                curr = arr[i];
            } else {
                curr = upper + 1;
            }

            // If there is a gap between prev and current value, record the missing range
            if (curr - prev > 1) {
                if (curr - prev === 2) {
                    a.push([prev + 1, prev + 1]); // Single missing number
                } else {
                    a.push([prev + 1, curr - 1]); // Range of missing numbers
                }
            }

            // Update previous to current
            prev = curr;
        }

        // Return the missing ranges
        return a;
    }
}
