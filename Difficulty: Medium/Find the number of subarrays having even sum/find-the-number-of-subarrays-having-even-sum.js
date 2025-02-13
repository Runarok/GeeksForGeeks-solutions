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
        let ans = ob.countEvenSum(arr);
        console.log(ans);
        console.log("~");
        tc--;
    }
}
// } Driver Code Ends

class Solution {
    // Function to count the number of subarrays with an even sum
    countEvenSum(arr) {
        // Initialize variables to keep track of the counts of even and odd subarray sums
        let ans = 0;  // To store the final count of subarrays with even sum
        let evenCount = 1;  // Start with one even subarray (an empty subarray has sum 0, which is even)
        let oddCount = 0;   // Initialize the count for odd sums to 0
        let sum = 0;  // Variable to keep track of the cumulative sum of elements in the array

        // Loop through each element in the array
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];  // Add the current element to the cumulative sum
            
            // Check if the cumulative sum is odd or even
            if (sum % 2 === 1) {
                ans += oddCount;  // If the sum is odd, add the count of odd sums found so far
                oddCount++;  // Increment the count of odd sums
            } else {
                ans += evenCount;  // If the sum is even, add the count of even sums found so far
                evenCount++;  // Increment the count of even sums
            }
        }

        // Return the total count of subarrays with an even sum
        return ans;
    }
}
