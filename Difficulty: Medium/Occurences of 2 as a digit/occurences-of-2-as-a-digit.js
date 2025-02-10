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
        let obj = new Solution();
        let res=obj.numberOf2sinRange(n);
        console.log(res);
    
    
console.log("~");
}
}
// } Driver Code Ends

class Solution {
    /**
     * Function to count the number of times digit '2' appears from 0 to n.
     * @param {number} n - The upper limit.
     * @returns {number} - The count of digit '2' occurrences.
     */
    number0f2s(n) {
        let count = 0;

        // Iterate from 0 to n and count occurrences of '2' in each number
        for (let i = 0; i <= n; i++) {
            count += (i.toString().split('2').length - 1); // Count '2's in the string representation
        }

        return count;
    }

    /**
     * Wrapper function that calls number0f2s.
     * @param {number} n - The upper limit.
     * @returns {number} - The count of digit '2' occurrences.
     */
    numberOf2sinRange(n) {
        return this.number0f2s(n);
    }
}
