//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        let arr = new Array(n);
        
        input_line = readLine().split(' ');
        for(let i=0;i<n;i++)
        {
            arr[i] = parseInt(input_line[i]);
        }
        
        let obj = new Solution();
        
        let ans = obj.countSubarrWithEqualZeroAndOne(arr, n)
        if(ans==-0n)
        ans=0n;
        console.log(ans.toString());
    
console.log("~");
}
}


// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {BigInt}
 */

class Solution {
    // Function to count subarrays with an equal number of 1s and 0s.
    countSubarrWithEqualZeroAndOne(arr, n) {
        let count = 0;  // Variable to store the count of valid subarrays
        let sum = 0;    // Variable to store the cumulative sum of the array elements
        
        // Create a hashmap to store the frequency of prefix sums
        let hashmap = new Map();
        
        // Initialize the hashmap with 0 sum having a frequency of 1 (for cases where the sum is zero from the start)
        hashmap.set(0, 1);

        // Convert all 0s in the array to -1 to help with calculating equal 1s and 0s subarrays
        for (let i = 0; i < n; i++) {
            if (arr[i] == 0) {
                arr[i] = -1;  // Change 0 to -1
            }
        }

        // Iterate through the modified array to find the subarrays with equal number of 1s and -1s (original 0s)
        for (let i = 0; i < n; i++) {
            sum = sum + arr[i];  // Update the cumulative sum

            // If the cumulative sum has been encountered before, increment the count by the frequency of that sum
            if (hashmap.has(sum)) {
                let freq = hashmap.get(sum);  // Get the frequency of this sum
                hashmap.set(sum, freq + 1);   // Update the frequency in the hashmap
                count = count + freq;         // Add the frequency to the count (valid subarrays with equal 1s and 0s)
            } else {
                hashmap.set(sum, 1);  // If the sum is encountered for the first time, set its frequency to 1
            }
        }

        // Return the final count of subarrays with equal number of 1s and 0s
        return count;
    }
}
