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
        // let [n,x] = readLine().trim().split(" ").map((x) => parseInt(x));
        // let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let S = readLine().trim();
        let obj = new Solution();
        let res=obj.maxLength(S);
        console.log(res);
    
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * Function to find the length of the longest substring of '1's in a binary string.
 * @param {string} S - The input binary string
 * @return {number} - The length of the longest sequence of consecutive '1's
 */
class Solution {
    maxLength(S) {
        // Split the string by '0', then find the length of the longest segment of '1's
        return Math.max(...S.split('0').map(s => s.length));
    }
}
