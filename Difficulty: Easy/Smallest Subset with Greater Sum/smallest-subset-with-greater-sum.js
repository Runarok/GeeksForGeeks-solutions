//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine()); // number of test cases
    for (let i = 0; i < t; i++) {
        let input_ar1 =
            readLine().split(' ').map(x => parseInt(x)); // parse input array

        let arr = input_ar1; // input array is directly used

        let obj = new Solution();
        console.log(obj.minSubset(arr)); // call minSubset and print result
        console.log("~");                // call minSubset and print result
    }
}
// } Driver Code Ends

// User function Template for javascript

class Solution {
    // Function to find the minimum number of elements in the first subset
    minSubset(arr) {
        // Sort the array in non-decreasing order to facilitate selecting the largest elements
        arr.sort((a, b) => a - b);

        // Initialize a dynamic programming (dp) array to store the cumulative sum of elements
        let dp = [];
        let count = 0;
        
        // Add a 0 to dp as the base case
        dp.push(0);
        
        // Populate the dp array with cumulative sums of the elements in arr
        for (let i = 1; i < arr.length; i++) {
            dp.push(dp[i - 1] + arr[i - 1]);
        }

        // Initialize a variable to accumulate the sum of the selected elements for the subset
        let sum = 0;

        // Traverse the sorted array from the end
        for (let i = arr.length - 1; i >= 0; i--) {
            // Add the current element to the sum of selected elements
            sum += arr[i];

            // If the sum of selected elements becomes greater than the cumulative sum of remaining elements, break
            if (dp[i] < sum) {
                count++;  // Increment the count of elements in the subset
                break;
            }
            
            // Increment count as this element is added to the subset
            count++;
        }

        // If no elements are selected, return 1 (this case is handled by the count check)
        if (count === 0) {
            return 1;
        }

        // Return the count of elements in the first subset
        return count;
    }
}
