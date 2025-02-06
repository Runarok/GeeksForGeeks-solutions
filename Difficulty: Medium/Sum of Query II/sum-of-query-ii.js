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

        let q = parseInt(readLine());

        let queries = new Array(2 * q);
        let input_queries = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < 2 * q; i++) {
            queries[i] = input_queries[i];
        }

        let obj = new Solution();
        let res = obj.querySum(n, arr, q, queries);

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
    * @param {number} n - The length of the array.
    * @param {number[]} arr - The array of integers.
    * @param {number} q - The number of queries.
    * @param {number[]} queries - An array containing the query ranges (l, r) in pairs.
    * 
    * @returns {number[]} - An array of results, each representing the sum of the elements in the specified range.
    */
    querySum(n, arr, q, queries) {
        // Create a prefix sum array to store cumulative sums up to each index
        const prefixSum = new Array(n + 1).fill(0);
        for (let i = 1; i <= n; i++) {
            prefixSum[i] = prefixSum[i - 1] + arr[i - 1]; // Fill prefix sum array
        }
        
        const result = [];  // Array to store the sum for each query
        for (let i = 0; i < q; i++) {
            // Extract the left and right bounds of the query
            const l = queries[2 * i], r = queries[2 * i + 1];
            
            // Calculate the sum using the prefix sum array
            const sum = prefixSum[r] - prefixSum[l - 1];
            
            result.push(sum);  // Store the result for the current query
        }
        
        return result;  // Return the array containing the results for all queries
    }
}
