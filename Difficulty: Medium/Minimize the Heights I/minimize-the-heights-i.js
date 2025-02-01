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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let k = parseInt(readLine());
        let n = arr.length;
        let obj = new Solution();
        let res = obj.getMinDiff(arr, k);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    // Function to calculate the minimum possible difference in height between the highest and lowest towers
    getMinDiff(arr, k) {
        // If there is only one tower, the difference is 0
        if (arr.length === 1) return 0;
    
        // Sort the array to easily calculate the range between modified towers
        arr.sort((a, b) => a - b);
        
        // Calculate the initial difference between the maximum and minimum tower heights
        let initialDiff = arr[arr.length - 1] - arr[0];
        
        // Initialize the minimum difference with the initial difference
        let minDiff = initialDiff;
        
        // Iterate through the array and try modifying each tower's height
        for (let i = 1; i < arr.length; i++) {
            // Calculate the potential new maximum and minimum heights after modifying the towers
            let high = Math.max(arr[arr.length - 1] - k, arr[i - 1] + k);
            let low = Math.min(arr[0] + k, arr[i] - k);
            
            // Update the minimum difference if a smaller one is found
            minDiff = Math.min(minDiff, high - low);
        }
        
        // Return the minimum difference after considering all possible height modifications
        return minDiff;
    }
}
