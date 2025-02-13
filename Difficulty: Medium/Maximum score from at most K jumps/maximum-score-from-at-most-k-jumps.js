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
        let arr = readLine().split(" ");
        for (let i = 0; i < arr.length; i++) arr[i] = parseInt(arr[i]);
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.getScore(arr, k);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    getScore(arr, k) {
        // Get the length of the input array
        const n = arr.length;
        
        // If the array is empty, return 0 as the score
        if (n === 0) return 0;
        
        // Initialize the dp array with negative infinity to store the maximum score at each position
        const dp = new Array(n).fill(-Infinity);
        dp[0] = arr[0]; // The score for the first element is just the value of arr[0]
        
        // Initialize a deque to help with maintaining the sliding window of optimal scores
        const deque = [];
        deque.push(0); // The first element is always in the deque
        
        // Iterate through the array starting from the second element
        for (let i = 1; i < n; i++) {
            // If the first index in the deque is out of the current window (i - k), remove it
            if (deque[0] < i - k) deque.shift();
            
            // Update dp[i] by considering the maximum score from the deque
            dp[i] = dp[deque[0]] + arr[i];
            
            // Maintain the deque in decreasing order of dp values to ensure the front has the largest value
            while (deque.length > 0 && dp[deque[deque.length - 1]] <= dp[i]) deque.pop();
            
            // Add the current index to the deque
            deque.push(i);
        }
        
        // Return the final score at the last position of the array
        return dp[n - 1];
    }
}
