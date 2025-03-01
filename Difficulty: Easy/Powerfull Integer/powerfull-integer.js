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
    let testcases = parseInt(readLine());
        let Sol = new Solution();
    while(testcases--){
        let n = parseInt(readLine());
        let arr = new Array(n);
        for(let i = 0;i<n;i++){
            arr[i] = readLine().split(" ").map((x)=>parseInt(x));
        }
        let k = parseInt(readLine());
        let res = Sol.powerfullInteger(n, arr, k);
        console.log(res.toString());
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {number} n
 * @param {number[][]} intervals
 * @param {number} k
 * @returns {number}
*/

class Solution {
    /**
     * Function to find the number of powerful integers in the given range.
     * @param {number} n
     * @param {number[][]} intervals
     * @param {number} k
     * @returns {number}
    */
    powerfullInteger(n, intervals, k) {
        let mp = new Map();  // Map to track the start and end of each interval

        // Create start and end events
        for (const x of intervals) {
            mp.set(x[0], (mp.get(x[0]) || 0) + 1);         // Increment count at start of interval
            mp.set(x[1] + 1, (mp.get(x[1] + 1) || 0) - 1); // Decrement count after end of interval
        }

        // Sort the keys of the map to simulate ordered traversal
        const sortedKeys = Array.from(mp.keys()).sort((a, b) => a - b);

        let cnt = 0, check = 0, Max = -1;

        // Process sorted keys to calculate the maximum satisfying position
        for (const key of sortedKeys) {
            cnt += mp.get(key); // Update active interval count at this position

            if (cnt >= k) {
                Max = key; // Update maximum position satisfying the condition
            } else if (check >= k) {
                Max = key - 1; // Update maximum when intervals drop below k
            }

            check = cnt; // Keep track of previous count
        }

        return Max;  // Return the maximum powerful integer within the range
    }
}
