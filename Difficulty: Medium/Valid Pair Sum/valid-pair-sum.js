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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.ValidPair(arr,n);
        if(res === -0)
            res = 0;
        console.log(res.toString());
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {

    ValidPair(arr, n) {
        
        // Initialize a counter to count valid pairs
        let count = 0
        
        // Sort the array in ascending order
        arr.sort((a, b) => a - b)
        
        let l = 0, r = n - 1  // Use two pointers, one at the start and one at the end
        
        // Iterate while the left pointer is less than the right pointer
        while (l < r) {
            const sum = arr[l] + arr[r]  // Calculate the sum of the current pair
            if (sum > 0) {
                // If sum > 0, all pairs between left and right pointers are valid
                count += (r - l)
                r--  // Move the right pointer leftward to find new pairs
            } else {
                l++  // If sum <= 0, move the left pointer rightward to increase the sum
            }
        }
        
        // Return the total count of valid pairs
        return count
    }
}
