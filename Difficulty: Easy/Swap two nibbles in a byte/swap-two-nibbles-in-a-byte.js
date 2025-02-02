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
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.swapNibbles(n);
        if (res == -0) {
            res = 0;
        }
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @return {number}
 */

class Solution {
    swapNibbles(n) {
        // Right shift the number by 4 bits and OR it with the left-shifted lower 4 bits
        return (n >> 4) | ((n & 15) << 4);
    }
}
