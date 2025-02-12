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

function printArray(res, size) {
    for (let i = 0; i < size; i++) {
        console.log(res[i]);
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) arr[i] = input_ar1[i];

        let q = parseInt(readLine());
        let queries = new Array();
        for (let i = 0; i < q; i++) {
            input_ar1 = readLine().split(' ');
            queries.push(input_ar1);
        }
        let obj = new Solution();
        let res = obj.processQueries(arr, n, queries, q);
        printArray(res, res.length);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number[]} queries
 * @param {number} q
 */

class Solution {
    // Preprocess function to compute the left and right indices
    preprocess(arr, N, left, right) {
        // Initialize first left index as that index only
        left[0] = 0;
        let lastIncr = 0;

        // Calculate the left array where each element stores the last index 
        // in the increasing subarray sequence
        for (let i = 1; i < N; i++) {
            // If the current value is greater than the previous,
            // update the last increasing index
            if (arr[i] > arr[i - 1]) lastIncr = i;
            left[i] = lastIncr;
        }

        // Initialize the last right index as that index only
        right[N - 1] = N - 1;
        let firstDecr = N - 1;

        // Calculate the right array where each element stores the first index
        // in the decreasing subarray sequence
        for (let i = N - 2; i >= 0; i--) {
            // If the current value is greater than the next,
            // update the first decreasing index
            if (arr[i] > arr[i + 1]) firstDecr = i;
            right[i] = firstDecr;
        }
    }

    // Function to check if the subarray between the given indices forms a mountain
    isSubarrayMountainForm(left, right, L, R) {
        // Return "Yes" if the right boundary of the starting range 
        // is greater than or equal to the left boundary of the ending range
        if (right[L] >= left[R]) return "Yes";
        return "No";
    }

    // Function to process the queries and determine if each subarray forms a mountain
    processQueries(a, n, queries, q) {
        let left = new Array(n);
        let right = new Array(n);

        // Preprocess the array to compute left and right boundaries
        this.preprocess(a, n, left, right);
        
        let v = [];
        
        // For each query, check if the corresponding subarray forms a mountain
        for (let i = 0; i < q; i++) {
            v.push(
                this.isSubarrayMountainForm(left, right, queries[i][0], queries[i][1]));
        }
        
        return v;
    }
}
