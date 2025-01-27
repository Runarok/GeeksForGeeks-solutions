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

    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(
            x => parseInt(x)); // Read and split input into an array
        let obj = new Solution();
        let ans = obj.circularSubarraySum(arr);
        if (ans == -0) ans = 0;
        console.log(ans);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {[number[]} arr
 * @returns {number}
 */
class Solution {
    // Function to find the maximum circular subarray sum.
    circularSubarraySum(arr) {
        // Helper function to calculate the maximum subarray sum using Kadane's algorithm
        function kadane(arr) {
            let maxEndingHere = arr[0];
            let maxSoFar = arr[0];
            for (let i = 1; i < arr.length; i++) {
                maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
                maxSoFar = Math.max(maxSoFar, maxEndingHere);
            }
            return maxSoFar;
        }
        
        // Step 1: Find the maximum subarray sum for the non-circular case (Kadane's Algorithm)
        let maxKadane = kadane(arr);
        
        // Step 2: Calculate the total sum of the array
        let totalSum = arr.reduce((acc, curr) => acc + curr, 0);
        
        // Step 3: Find the minimum subarray sum by inverting the array and applying Kadane's algorithm
        let minKadane = kadane(arr.map(x => -x));
        
        // Step 4: Calculate the maximum circular sum
        let maxCircular = totalSum + minKadane; 
        
        // Step 5: If the entire array is negative, we can't use the circular case, so return maxKadane
        if (maxCircular === 0) {
            return maxKadane;
        }
        
        // Step 6: Return the maximum of non-circular and circular subarray sums
        return Math.max(maxKadane, maxCircular);
    }
}
