//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Initial Template for javascript
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
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let input_ar0 = readLine().split(' ').map(x => parseInt(x));
        let k = input_ar0[0];
        let obj = new Solution();
        console.log(obj.longestSubarray(arr, k));
        console.log("~");
    }
}
// } Driver Code Ends

// Back-end complete function Template for javascript

class Solution {
    longestSubarray(arr, k) {
        // Transform the array to store +1 for values greater than k and -1 for others
        let bal = arr.map(num => num > k ? 1 : -1);
        
        // Dictionary to store the first occurrence of each prefix sum
        let prefix = {};
        
        let curr = 0; // Current prefix sum
        let max = 0;  // Variable to track the maximum length of the subarray
        
        // Traverse through the array
        for (let i = 0; i < bal.length; i++) {
            let val = bal[i]; 
            curr += val; // Update the current prefix sum
            
            // If the current prefix sum is positive, we can consider the whole subarray from the start
            if (curr > 0) {
                max = i + 1; // Update max length to the current index + 1
            }
            
            // If the (curr-1) prefix sum exists, calculate the subarray length between current index and the first occurrence of (curr-1)
            if (prefix.hasOwnProperty(curr - 1)) {
                max = Math.max(max, i - prefix[curr - 1]);
            }
            
            // Store the first occurrence of each prefix sum
            if (!prefix.hasOwnProperty(curr)) {
                prefix[curr] = i;
            }
        }
        
        return max; // Return the length of the longest subarray
    }
}
