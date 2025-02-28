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
        let [j,L] =  readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.leftShops(j,L);
        console.log(res);
        
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} i
 * @param {number} L
 * @return {number}
*/

class Solution {

    // Function to calculate the number of shops to the left of a given position 'i'
    leftShops(i, L) {
        // Calculate the result as (2^L) - i
        let res = (2 ** L) - i;
        return res;
    }
}
