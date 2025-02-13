//{ Driver Code Starts
const input = require('readline')
                  .createInterface({input : process.stdin, output : process.stdout});

input.question('', (t) => {
    t = parseInt(t);
    const solution = new Solution();

    const processTestCase = () => {
        input.question('', (line1) => {
            input.question('', (line2) => {
                let arr1 = line1.trim().split(' ').map(Number);
                let arr2 = line2.trim().split(' ').map(Number);
                console.log(solution.longestCommonSum(arr1, arr2));
                console.log("~")
                if (--t > 0) {
                    processTestCase();
                }
                else {
                    input.close();
                }
            });
        });
    };

    processTestCase();
});
// } Driver Code Ends

class Solution {
    // Function to find the longest common sum between two arrays
    longestCommonSum(arr1, arr2) {
        const n = arr1.length;  // Get the length of the arrays
        const prefixSumIndex = new Map();  // Map to store prefix sums and their indices
        prefixSumIndex.set(0, -1);  // Initialize the map with prefix sum 0 at index -1
        
        let maxLength = 0;  // Variable to store the maximum length of the subarray
        let prefixSum = 0;  // Variable to calculate the prefix sum
        
        // Iterate over the arrays
        for (let i = 0; i < n; i++) {
            // Update the prefix sum (difference between elements of arr1 and arr2)
            prefixSum += arr1[i] - arr2[i];
            
            // If the prefix sum has been seen before, calculate the length of the subarray
            if (prefixSumIndex.has(prefixSum)) {
                maxLength = Math.max(maxLength, i - prefixSumIndex.get(prefixSum));  // Update maxLength
            } else {
                // Store the index of the first occurrence of the current prefix sum
                prefixSumIndex.set(prefixSum, i);
            }
        }
        
        return maxLength;  // Return the maximum length of the subarray with equal sums
    }
}
