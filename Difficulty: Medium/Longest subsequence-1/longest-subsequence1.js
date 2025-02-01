//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.longestSubseq(arr);
        console.log(res);
        console.log("~");
    }
}

// } Driver Code Ends


class Solution {
    /**
     * @param {number[]} arr
     * @returns {number}
     */
    longestSubseq(arr) {
        const length = arr.length;  // Length of the input array
        const dp = new Array(length).fill(1);  // Array to store the length of the longest subsequence ending at each index
        let maxLength = 1;  // Variable to keep track of the maximum subsequence length
        
        // Iterate through each element starting from the second one
        for (let i = 1; i < length; i++) {
            // Compare with all previous elements
            for (let j = 0; j < i; j++) {
                // Check if the difference between the two elements is exactly 1
                if (Math.abs(arr[i] - arr[j]) === 1) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);  // Update the dp array if a longer subsequence is found
                }
            }
            
            maxLength = Math.max(maxLength, dp[i]);  // Update the maximum subsequence length
        }
        
        return maxLength;  // Return the length of the longest subsequence
    }
}
