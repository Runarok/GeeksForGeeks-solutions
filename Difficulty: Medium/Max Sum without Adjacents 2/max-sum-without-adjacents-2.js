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
        let ans = ob.findMaxSum(arr);
        console.log(ans);
        // colsole.log("~");
        tc--;
    }
}
// } Driver Code Ends

class Solution {
    /**
     * Function to find the maximum sum possible without selecting three consecutive elements.
     * @param {number[]} arr - The input array of numbers.
     * @return {number} - The maximum sum possible.
     */
    findMaxSum(arr) {
        let n = arr.length;

        function getMaxSum(arr, n) {
            // Base case: If the array is empty, return 0
            if (n === 0) {
                return 0;
            }

            // If there's only one element, return it
            if (n === 1) {
                return arr[0];
            }

            // If there are two elements, return their sum
            if (n === 2) {
                return arr[0] + arr[1];
            }

            // Create a dp array to store intermediate results
            let dp = new Array(n).fill(0);

            // Initialize base cases
            dp[0] = arr[0];
            dp[1] = arr[0] + arr[1];
            dp[2] = Math.max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2]);

            // Fill the dp array using the given conditions
            for (let i = 3; i < n; i++) {
                dp[i] = Math.max(
                    dp[i - 1],                      // Exclude current element
                    dp[i - 2] + arr[i],             // Include current element, skipping one
                    dp[i - 3] + arr[i - 1] + arr[i] // Include current and previous element, skipping two
                );
            }

            // The last element in dp array contains the result
            return dp[n - 1];
        }

        return getMaxSum(arr, n);
    }
}
