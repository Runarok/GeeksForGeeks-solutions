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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let a = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            a[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.search(a,n);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} N
 * @returns {number}
 */

class Solution {
    
    // Function to search for the number that doesn't repeat consecutively in the array.
    search(a, N) {
        // Traverse through the array
        for (let i = 0; i < a.length; i++) {
            // Check if current element is equal to the next element
            if (a[i] == a[i + 1]) {
                // Skip the next element if it matches the current one
                i += 1;
            } else {
                // Return the element that doesn't have a consecutive match
                return a[i];
            }
        }
    }
}
