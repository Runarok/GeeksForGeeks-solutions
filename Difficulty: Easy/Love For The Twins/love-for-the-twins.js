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
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            a[i] = input_ar[i];
        }
        let obj = new Solution();
        console.log(obj.getTwinCount(n, a));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} N
 * @param {number[]} Arr
 * @returns {number}
*/

class Solution {
    // Function to get the count of pairs which are twin.
    getTwinCount(N, Arr) {
        // Initialize a set to keep track of the elements
        const set = new Set();
        let count = 0;

        // Iterate through the array
        for (const num of Arr) {
            // If the number is already in the set, it forms a twin pair
            if (set.has(num)) {
                count += 2; // Increase the twin count by 2 (one for each pair)
                set.delete(num); // Remove the number from the set
            } else {
                set.add(num); // Otherwise, add the number to the set
            }
        }

        // Return the count of twin pairs
        return count;
    }
}
