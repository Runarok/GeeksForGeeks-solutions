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

function printArray(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.countElements(arr);
        if (ans == -0) ans = 0;
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    countElements(arr) {
        let missingcount = 0; // Initialize the missing elements counter
        
        // Sort the array in ascending order
        arr.sort((a, b) => a - b);
        
        // Loop through the array and check the difference between consecutive elements
        for (let i = 0; i < arr.length - 1; i++) {
            let diff = arr[i + 1] - arr[i]; // Find the difference between consecutive elements
            
            // If the difference is greater than 1, it means there are missing elements
            if (diff > 1) {
                missingcount += (diff - 1); // Add the missing elements count to the total
            }
        }
        
        // Return the total count of missing elements
        return missingcount;
    }
}
