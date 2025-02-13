//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++){
        
        let N = parseInt(readLine());
        
        
        let arr = new Array(N);
        let input_arr = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++){
            arr[i] = input_arr[i];
        }
        
        
        let target = parseInt(readLine());
        
        let obj = new Solution();
        let res = obj.findTargetSumWays(N, arr, target);
        console.log(res);
    }
}

// } Driver Code Ends

class Solution {
    /**
     * @param {number} N - The number of elements in the array
     * @param {number[]} arr - The input array
     * @param {number} target - The target difference
     * @returns {number} - The number of ways to partition the array
     */
    findTargetSumWays(N, arr, target) {

        // Function to check how many subsets sum up to a given target
        function isSubsetSum(arr, target) {
            const n = arr.length;

            // DP table initialized to -1 (indicating uncomputed values)
            const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(-1));

            // Recursive function to calculate subset sum ways
            function countSubsets(index, target) {
                // Base cases
                if (index === 0) {
                    if (target === 0 && arr[0] === 0) return dp[index][target] = 2;
                    if (arr[index] === target || target === 0) return dp[index][target] = 1;
                    return dp[index][target] = 0;
                }
                if (index < 0) return 0; // Invalid index case

                // Return precomputed value if available
                if (dp[index][target] !== -1) return dp[index][target];

                // Option 1: Exclude the current element
                const excludeCurrent = countSubsets(index - 1, target);

                // Option 2: Include the current element (if it does not exceed the target)
                let includeCurrent = 0;
                if (target >= arr[index]) {
                    includeCurrent = countSubsets(index - 1, target - arr[index]);
                }

                // Store and return the computed result
                dp[index][target] = includeCurrent + excludeCurrent;
                return dp[index][target];
            }

            // Start recursive computation from the last index
            return countSubsets(n - 1, target);
        }

        // Function to compute the number of ways to form the given subset sum
        function findWays(nums, sumTarget) {
            return isSubsetSum(nums, sumTarget);
        }

        // Function to determine valid partitions based on the given difference
        function countPartitions(arr, difference) {
            const totalSum = arr.reduce((sum, num) => sum + num, 0);

            // Check if partitioning is possible
            if (totalSum - difference < 0 || (totalSum - difference) % 2 !== 0) {
                return 0;
            }

            // Compute the subset sum target
            const subsetTarget = (totalSum - difference) / 2;
            return findWays(arr, subsetTarget);
        }

        // Compute and return the result
        return countPartitions(arr, target);
    }
}
