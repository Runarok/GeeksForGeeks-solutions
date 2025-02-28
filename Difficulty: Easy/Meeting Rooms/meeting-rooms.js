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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine().trim());
        let arr = new Array(n);

        for (let i = 0; i < n; i++) {
            let temp = readLine().split(' ').map(x => parseInt(x));
            arr[i] = [ temp[0], temp[1] ];
        }
        let obj = new Solution();
        let ans = obj.canAttend(arr);
        if (ans)
            console.log("true");
        else
            console.log("false");
    }
}
// } Driver Code Ends

class Solution {
    // Function to check if a person can attend all the meetings without overlap
    canAttend(arr) {
        // Initialize the result as true, assuming all meetings can be attended
        let res = true;

        // Sort the meetings by their start time to check for overlaps easily
        arr.sort((a, b) => a[0] - b[0]);

        // Iterate through the sorted array of meetings
        for (let i = 1; i < arr.length; i++) {
            // If the current meeting starts before the previous one ends, there is a conflict
            if (arr[i][0] < arr[i - 1][1]) {
                res = false; // Mark as false if overlap is found
                break; // Exit the loop as we found a conflict
            }
        }

        // Return the result indicating whether all meetings can be attended
        return res;
    }
}
