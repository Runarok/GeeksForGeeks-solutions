//{ Driver Code Starts
// Position this line where user code will be pasted.
const readline = require('readline')
                     .createInterface({input : process.stdin, output : process.stdout});

const input = [];
readline.on('line', (line) => { input.push(line); }).on('close', () => {
    const t = parseInt(input[0], 10);
    for (let i = 1; i <= t; i++) {
        const arr = input[i].split(' ').map(Number);
        const ob = new Solution();
        console.log(ob.firstIndex(arr));
        console.log("~");
    }
});
// } Driver Code Ends

class Solution {
    /**
     * Finds the first index of the element '1' in a sorted binary array.
     * @param {number[]} arr - The binary array to search in (only contains 0s and 1s).
     * @returns {number} - The index of the first occurrence of '1', or -1 if '1' is not found.
     */
    firstIndex(arr) {
        let left = 0;  // Initialize the left pointer
        let right = arr.length - 1;  // Initialize the right pointer
        let result = -1;  // Store the result, default to -1 (if no '1' is found)

        // Perform binary search to find the first occurrence of 1
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);  // Find the middle index

            // If the middle element is 1, we have a potential result
            if (arr[mid] === 1) {
                result = mid;  // Store the index of '1'
                right = mid - 1;  // Continue searching in the left half to find the first '1'
            } else {
                left = mid + 1;  // Move to the right half if '1' is not found
            }
        }

        // Return the index of the first occurrence of '1' or -1 if not found
        return result;
    }
}
