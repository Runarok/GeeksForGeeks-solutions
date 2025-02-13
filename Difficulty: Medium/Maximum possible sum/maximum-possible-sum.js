//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
const readline = require('readline');

function main() {
    const rl =
        readline.createInterface({input : process.stdin, output : process.stdout});

    let t;
    const testCases = [];
    let inputCount = 0;

    rl.question('', (line) => {
        t = parseInt(line.trim());
        inputCount = t * 2;

        rl.on('line', (line) => {
            testCases.push(line.trim());
            if (testCases.length === inputCount) {
                rl.close();
            }
        });
    });

    rl.on('close', () => {
        const solution = new Solution();
        for (let i = 0; i < t; i++) {
            const arr1 = testCases[2 * i].split(' ').map(Number);
            const arr2 = testCases[2 * i + 1].split(' ').map(Number);
            const res = solution.returnMaxSum(arr1, arr2);
            console.log(res);
            console.log("~");
        }
    });
}

main();

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    returnMaxSum(arr1, arr2) {
        let n = arr1.length;
        let left = 0, right = 0;
        let maxSum = 0;
        let currentSum = 0;
        let uniqueElements = new Set(); // Set to track unique elements from arr1

        while (right < n) {
            // Expand the window while encountering unique elements
            while (right < n && !uniqueElements.has(arr1[right])) {
                currentSum += arr2[right]; // Add corresponding value from arr2
                uniqueElements.add(arr1[right]); // Mark element as seen
                maxSum = Math.max(maxSum, currentSum); // Update max sum
                right++;
            }

            // Shrink the window when a duplicate is found
            while (right < n && uniqueElements.has(arr1[right])) {
                uniqueElements.delete(arr1[left]); // Remove from set
                currentSum -= arr2[left]; // Subtract value from arr2
                left++;
            }
        }
        return maxSum;
    }
}
