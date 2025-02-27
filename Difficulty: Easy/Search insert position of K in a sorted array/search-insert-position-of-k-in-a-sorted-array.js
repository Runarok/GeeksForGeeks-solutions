//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.searchInsertK(arr,n, k);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
*/

class Solution {
    
    searchInsertK(arr, N, K) {
        let start = 0;
        let end = N - 1;
        let mid = 0;
        let result = N;  // Default position if K is greater than all elements.

        while (start <= end) {
            mid = Math.floor((start + end) / 2);

            if (arr[mid] >= K) {
                // K could be inserted at or before this index.
                result = mid;
                end = mid - 1;
            } else {
                // K would come after this index.
                start = mid + 1;
            }
        }

        return result;
    }
}
