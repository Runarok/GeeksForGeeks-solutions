//{ Driver Code Starts
// Initial Template for javascript

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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let d = parseInt(readLine());
        let obj = new Solution();
        let res = obj.minSteps(d);
        console.log(res);
    
console.log("~");
}
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} d
 * @returns {number}
 */

class Solution {
    // Function to find the minimum steps to reach the target distance
    minSteps(d) {
        // Finding the absolute value of target distance
        let target = Math.abs(d);
        let sum = 0;
        let step = 0;

        // Loop until the sum reaches the target distance or the difference between sum and target is not even
        while (sum < target || (sum - target) % 2 !== 0) {
            step += 1;
            sum += step;
        }

        // Return the number of steps taken
        return step;
    }
}
