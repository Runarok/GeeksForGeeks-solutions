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

        let n = parseInt(readLine());

        let arr = new Array(n);
        let input_arr = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_arr[i];
        }

        let obj = new Solution();
        let res = obj.longestIncreasingSubsequence(n, arr);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
    * Function to find the longest increasing subsequence in an array.
    * 
    * @param {number} n - The number of elements in the array.
    * @param {number[]} arr - The input array to find the longest increasing subsequence.
    * 
    * @returns {number[]} - The longest increasing subsequence of the input array.
    */
    longestIncreasingSubsequence(n, arr) {
        // dp[i] will store the length of the longest increasing subsequence ending at index i
        const dp = new Array(n).fill(1);
        
        // hash[i] will store the index of the previous element in the longest subsequence
        const hash = new Array(n).fill(1);
    
        // Build the dp array and hash array to track the subsequences
        for (let i = 0; i <= n - 1; i++) {
            hash[i] = i; // Initialize with the current index
            
            // Traverse all previous elements to find the longest increasing subsequence ending at i
            for (let prev_index = 0; prev_index <= i - 1; prev_index++) {
                // If arr[prev_index] < arr[i], and dp[prev_index] + 1 is greater than dp[i]
                if (arr[prev_index] < arr[i] && 1 + dp[prev_index] > dp[i]) {
                    dp[i] = 1 + dp[prev_index]; // Update dp[i] to the new longest subsequence length
                    hash[i] = prev_index; // Update hash[i] to track the predecessor of the subsequence
                }
            }
        }
    
        // Find the index with the maximum subsequence length
        let maxLength = -1;
        let lastIndex = -1;
    
        // Determine the end index of the longest increasing subsequence
        for (let i = 0; i <= n - 1; i++) {
            if (dp[i] > maxLength) {
                maxLength = dp[i]; // Update the maximum length found so far
                lastIndex = i; // Store the index of the last element of the subsequence
            }
        }
    
        // Reconstruct the longest increasing subsequence
        const subsequence = [arr[lastIndex]]; // Start with the last element of the subsequence
    
        // Trace back the subsequence using the hash array
        while (hash[lastIndex] !== lastIndex) {
            lastIndex = hash[lastIndex]; // Move to the predecessor of the current element
            subsequence.push(arr[lastIndex]); // Add the element to the subsequence
        }
    
        subsequence.reverse(); // Reverse the subsequence as it was constructed backwards
    
        return subsequence; // Return the longest increasing subsequence
    }
}
