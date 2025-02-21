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
        let [X1, Y1, R1, X2, Y2, R2] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.circleTouch(X1, Y1, R1, X2, Y2, R2);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} X1
 * @param {number} Y1
 * @param {number} R1
 * @param {number} X2
 * @param {number} Y2
 * @param {number} R2
 * @returns {boolean}
 */

class Solution {
    // Function to check whether two circles touch each other
    circleTouch(X1, Y1, R1, X2, Y2, R2) {
        // Calculate the distance between the centers of the two circles
        let dist = Math.sqrt((X1 - X2) * (X1 - X2) + (Y1 - Y2) * (Y1 - Y2));

        // Check if the circles touch each other
        return (R1 - R2 <= dist && R1 + R2 >= dist) ? 1 : 0;
    }
}
