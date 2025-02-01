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
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(Number);
        let obj = new Solution();

        let ans = obj.subArrayExists(arr)
        console.log(ans ? 'true' : 'false');

        console.log("~");
    }
}

// } Driver Code Ends


// User-defined function Template for JavaScript  

/**  
 * Checks if there exists a subarray with a sum of zero.  
 * @param {number[]} nums - The input array  
 * @returns {boolean} - Returns true if a zero-sum subarray exists, otherwise false  
 */  

class Solution {  
    // Function to determine if a subarray with zero sum is present  
    subArrayExists(nums) {  
        // Set to store prefix sums  
        let prefixSet = new Set();  
        let prefixSum = 0;  

        // Iterate through the array  
        for (let i = 0; i < nums.length; i++) {  
            prefixSum += nums[i];  

            // Check if the prefix sum has been seen before or is zero  
            if (prefixSet.has(prefixSum)) {  
                return true;  
            } else if (prefixSum == 0) {  
                return true;  
            } else {  
                // Add current prefix sum to the set  
                prefixSet.add(prefixSum);  
            }  
        }  

        // Return false if no zero-sum subarray is found  
        return false;  
    }  
}  
