//{ Driver Code Starts
//Initial Template for javascript

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
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        obj.arrange(arr, n);
        let S = '';
        for(let i=0;i<n;i++)
        {
            S+=arr[i];
            S+=' ';
        }
        console.log(S);
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number[]} arr - The input array where each index i should be rearranged to arr[arr[i]]
 * @param {number} n - The size of the array
 */

class Solution {
    
    // Function to rearrange an array so that arr[i] becomes arr[arr[i]]
    // using O(1) extra space.
    arrange(arr, n) {
        // First pass: Encode both old and new values in a single number.
        for (let i = 0; i < n; i++) {
            arr[i] += Math.floor(arr[arr[i]] % n) * n; // Store new value in the upper part of the number
        }

        // Second pass: Extract the new values from the encoded numbers.
        for (let i = 0; i < n; i++) {
            arr[i] = Math.floor(arr[i] / n); // Retrieve the final transformed value
        }

        return arr; // Return the modified array
    }
}
