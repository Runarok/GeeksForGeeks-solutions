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
        let ans = ob.countTriplet(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {

    countTriplet(arr) {
        // Initialize the count of valid triplets
        let count = 0;

        // Sort the array to help with the two-pointer approach
        arr.sort((a, b) => a - b);
        let n = arr.length;

        // Iterate through each element to check for triplets
        for (let i = 0; i < n; i++) {
            let target = arr[i];
            let left = 0;
            let right = n - 1;

            // Use two pointers to find pairs that sum up to the target
            while (left < right) {
                let sum = arr[left] + arr[right];
                
                if (sum === target) {
                    // Check that the left and right pointers are not pointing to the current element
                    if (left !== i && right !== i) {
                        count++;
                    }
                    // Move both pointers inward
                    left++;
                    right--;
                } else if (sum < target) {
                    // Move the left pointer to the right to increase the sum
                    left++;
                } else {
                    // Move the right pointer to the left to decrease the sum
                    right--;
                }
            }
        }

        // Return the total count of valid triplets
        return count;
    }
}
