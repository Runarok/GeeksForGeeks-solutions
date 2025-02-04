//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    inputString = inputString
        .trim()
        .split('\n')
        .map((string) => {
            return string.trim();
        });

    main();
});

const readLine = (_) => {
    return inputString[currentLine++];
};

const printList = (res, n) => {
    let s = '';
    for (let i = 0; i < n; i++) {
        s += res[i] + ' ';
    }
    console.log(s);
};

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input1 = readLine().split(' ').map((x) => parseInt(x));
        let n = input1[0];
        let k = input1[1];
        let arr = new Array(n);
        let input2 = readLine().split(' ').map((x) => parseInt(x));
        for (let i = 0; i < input2.length; i++) {
            arr[i] = input2[i];
        }
        let obj = new Solution();
        let res = obj.removals(arr, n, k);
        console.log(res);
    
console.log("~");
}
}


// } Driver Code Ends


// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to find the minimum number of elements to remove
    removals(arr, n, k) {
        // Sort the array to make it easier to find valid subarrays
        arr.sort((a, b) => a - b);
        
        let start = 0;
        let maxSubarrayLength = 0;
        
        // Use a sliding window approach
        for (let end = 0; end < n; end++) {
            while (arr[end] - arr[start] > k) {
                start++;
            }
            
            maxSubarrayLength = Math.max(maxSubarrayLength, end - start + 1);
        }
        
        // The minimum removals needed to satisfy the condition
        return n - maxSubarrayLength;
    }
}
