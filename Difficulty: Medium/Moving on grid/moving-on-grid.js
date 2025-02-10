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
        let input_line = readLine().split(' ');
        let r = parseInt(input_line[0]);
        let c = parseInt(input_line[1]);
        let obj = new Solution();
        console.log(obj.movOnGrid(r,c));
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} r
 * @param {number} c
 * @returns {number}
*/

class Solution {
    /**
     * Function to determine the player based on grid movement.
     * @param {number} r - The row number.
     * @param {number} c - The column number.
     * @returns {string} - "JON" or "ARYA".
     */
    movOnGrid(r, c) {
        // JON wins if (r-1) % 7 is different from (c-1) % 4, else ARYA wins
        return (r - 1) % 7 !== (c - 1) % 4 ? "JON" : "ARYA";
    }
}
