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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.min_operations(arr, n);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

class Solution {
    // Function to find the minimum number of operations to make the array increasing
    min_operations(num, n) {
        // Initialize dp array where dp[i] stores the length of the longest increasing subsequence ending at index i
        let dp = new Array(n).fill(1); 
        let len = 1;  // Variable to track the maximum length of the increasing subsequence

        // Loop through each element of the array starting from index 1
        for (let i = 1; i < n; i++) {
            
            // Compare the current element with all previous elements
            for (let j = 0; j < i; j++) {
                
                // If num[i] is greater than num[j] and the difference in indices is less than or equal to the difference in values
                if (num[i] > num[j] && (i - j) <= (num[i] - num[j])) {
                    // Update dp[i] to reflect the maximum length of an increasing subsequence ending at i
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }

            // Keep track of the maximum length of any increasing subsequence
            len = Math.max(len, dp[i]);
        }

        // Return the minimum number of operations required, which is the difference between the total number of elements and the length of the longest increasing subsequence
        return n - len;
    }
}
