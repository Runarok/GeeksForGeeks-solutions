//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let obj = new Solution();
        let result = obj.inversePermutation(arr);
        console.log(result.join(' '));
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends

class Solution {
    // Function to find the inverse of a permutation array
    inversePermutation(arr) {
        // Get the length of the array
        let n = arr.length;
        
        // Initialize an empty array to store the result
        let result = [];
        
        // Iterate through the array and calculate the inverse permutation
        for (let i = 0; i < n; i++) {
            // Place the element in its correct position in the result array
            // arr[i] - 1 gives the index position, and i + 1 is the value to store
            result[arr[i] - 1] = i + 1;
        }
        
        // Return the resulting inverse permutation array
        return result;
    }
}
