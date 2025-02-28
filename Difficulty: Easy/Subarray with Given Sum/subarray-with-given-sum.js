//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    while (t-- > 0) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let sum = parseInt(readLine());

        let obj = new Solution();
        let list = obj.subarraySum(arr, sum);

        if (list.length === 0) {
            console.log("[]");
        } else {
            console.log(list.join(" "));
        }
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, sum) {
        let start = 0; // Initialize start index of the sliding window
        let windowSum = 0; // Initialize the sum of the current window
        
        // Iterate through the array
        for (let i = 0; i < arr.length; i++) {
            // Add the current element to the window sum
            windowSum += arr[i];
            
            // Shrink the window from the left if the window sum exceeds the target sum
            while (windowSum > sum && start < i) {
                windowSum -= arr[start];
                start++;
            }
            
            // If the window sum equals the target sum, return the 1-based indices of the sub-array
            if (windowSum === sum) {
                return [start + 1, i + 1]; // 1-based index
            }
        }

        // Return an empty array if no sub-array is found
        return [];
    }
}
