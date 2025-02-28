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
        let ans = ob.sumoflength(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to find the length of smallest subarray with sum greater than x.
    sumoflength(arr) {
        // Modulo value for large number handling
        const MOD = 10**9 + 7;

        let left = 0; // Left pointer for the sliding window
        let ans = 0;  // Variable to store the final answer
        let n = arr.length;
        
        let st = new Set();  // Set to store distinct elements within the window

        // Iterate over the array with the right pointer
        for (let right = 0; right < n; right++) {
            // Shrink the window until arr[right] is unique
            while (st.has(arr[right])) {
                st.delete(arr[left]);  // Remove the leftmost element
                left++;  // Move the left pointer forward
            }

            // Insert the current element into the set
            st.add(arr[right]);

            // Calculate the number of subarrays ending at 'right' index
            let length = right - left + 1;

            // Update the result with the sum of lengths of all subarrays ending at 'right'
            ans = (ans + ((length * (length + 1)) / 2)) % MOD;
        }

        // Return the final answer
        return ans;
    }
}
