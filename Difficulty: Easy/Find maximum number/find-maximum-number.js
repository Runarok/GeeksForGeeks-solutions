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
        let N = readLine().trim();
        let obj = new Solution();
        let res = obj.findMax(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
*/

class Solution
{
    //Function to find the maximum number by rearranging digits.
    findMax(N)
    {
        // Convert the number to an array of its digits (as strings).
        return N.split('')
                // Sort the digits in descending order to form the largest number.
                .sort((digit1, digit2) => digit2 - digit1)
                // Join the sorted digits back into a single string.
                .join('')
    }
}
