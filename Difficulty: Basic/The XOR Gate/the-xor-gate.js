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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        input_line = readLine().split(' ');
        let arr = new Array(n);
        for(let i=0;i<n;i++)
            arr[i] = parseInt(input_line[i]);
        
        let obj = new Solution();
        let ans = obj.xorGate(arr, n);
        if(ans==-0)
            ans=0;
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - Array of numbers
 * @param {number} N - Length of the array
 * @returns {number} - The XOR of all elements in the array
 */

class Solution {
    // Function to find XOR of all elements and return it.
    xorGate(arr, N) {
        // Initialize the result with the first element of the array
        let ans = arr[0];

        // Loop through the rest of the elements in the array
        for (let i = 1; i < N; i++) {
            // XOR the current element with the result
            ans ^= arr[i];
        }

        // Return the final result
        return ans;
    }
}
