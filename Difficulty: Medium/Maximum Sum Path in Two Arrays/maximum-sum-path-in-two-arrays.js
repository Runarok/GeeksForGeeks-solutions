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
        // let k = parseInt(readLine());
        let arr1 = readLine().split(' ').map(Number);
        let arr2 = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.maxPathSum(arr1, arr2);
        console.log(ans);
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    maxPathSum(arr1, arr2) {
        // Sort both arrays in ascending order
        arr1.sort((a, b) => a - b);
        arr2.sort((a, b) => a - b);

        let i = 0, j = 0; // Pointers for both arrays
        let sum1 = 0, sum2 = 0; // Track sums for each array
        let result = 0; // Store the maximum path sum

        // Traverse both arrays simultaneously
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                sum1 += arr1[i]; // Add to sum1 when arr1[i] is smaller
                i++;
            } else if (arr1[i] > arr2[j]) {
                sum2 += arr2[j]; // Add to sum2 when arr2[j] is smaller
                j++;
            } else {
                // When common element is found, add the max sum from both subarrays
                sum1 += arr1[i];
                sum2 += arr2[j];
                result += Math.max(sum1, sum2); // Pick the maximum path sum
                sum1 = 0; // Reset sums
                sum2 = 0;
                i++;
                j++;
            }
        }

        // Process remaining elements in arr1
        while (i < arr1.length) {
            sum1 += arr1[i];
            i++;
        }

        // Process remaining elements in arr2
        while (j < arr2.length) {
            sum2 += arr2[j];
            j++;
        }

        // Add the remaining max sum to the result
        result += Math.max(sum1, sum2);

        return result;
    }
}
