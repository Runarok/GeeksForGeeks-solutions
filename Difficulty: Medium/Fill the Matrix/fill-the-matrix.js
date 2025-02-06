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
        let [N, M] = readLine().trim().split(" ").map((x) => parseInt(x));
        let [x, y] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.minIteration(N, M, x, y);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number} M
 * @param {number} x
 * @param {number} y
 * @returns {number}
*/

class Solution {
    minIteration(n, m, x, y) {
        // Calculate the distance to the four corners of the grid
        let d1 = Math.abs(x - 1) + Math.abs(y - 1); // Distance to top-left corner (1, 1)
        let d2 = Math.abs(x - 1) + Math.abs(y - m); // Distance to top-right corner (1, M)
        let d3 = Math.abs(x - n) + Math.abs(y - 1); // Distance to bottom-left corner (N, 1)
        let d4 = Math.abs(x - n) + Math.abs(y - m); // Distance to bottom-right corner (N, M)

        // Return the maximum of these distances
        return Math.max(d1, d2, d3, d4);
    }
}
