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
        let input_line = readLine().split(' ').map(x=>parseInt(x));
        let n = input_line[0];
        let obj = new Solution();
        console.log(obj.getFirstSetBit(n));
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Number} n
 * @returns {Number}
*/


class Solution {
    /**
     * Function to find the position of the first set bit in the given number.
     * @param {number} n - The input number whose first set bit's position we need to find.
     * @returns {number} - The position of the first set bit (1-based index).
     */
    getFirstSetBit(n) {
        // Formula to find the position of the first set bit:
        // We first calculate n^(n-1), then add 1, and divide by 2 to isolate the first set bit.
        // Finally, we apply log base 2 to get the bit's position, and add 1 for 1-based indexing.
        return Math.log2(((n ^ (n - 1)) + 1) / 2) + 1;
    }
}
