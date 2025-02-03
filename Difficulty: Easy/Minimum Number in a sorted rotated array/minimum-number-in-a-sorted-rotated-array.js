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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let a = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            a[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.minNumber(a, 0, n-1));
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} low
 * @param {number} high
 * @returns {number}
*/

class Solution {
    // Function to find the minimum element in sorted and rotated array.
    minNumber(arr, low, high) {
        // If the array is not rotated, the minimum element is the first element
        if (arr[low] < arr[high]) {
            return arr[0];
        }

        let i = low, j = high, mid = -1;

        // Binary search to find the minimum element in the rotated sorted array
        while (i < j) {
            mid = Math.floor((i + j) / 2);

            // Check if mid is the minimum element
            if (arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]) {
                return arr[mid];
            }

            // Move the search range based on the comparison of mid and the leftmost element
            if (arr[mid] > arr[i]) {
                i = mid;
            } else {
                j = mid;
            }
        }

        // If the array is rotated, return the minimum element
        if (i + 1 === high) {
            return arr[i + 1];
        } else if (j === 0) {
            return arr[j];
        }

        return arr[0];
    }
}
