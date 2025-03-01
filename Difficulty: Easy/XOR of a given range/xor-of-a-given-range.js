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
        let [n,a,b] =  readLine().trim().split(" ").map((x) => parseInt(x));
        let nums =  readLine().trim().split(" ").map((x) => parseInt(x));
        if(a > b){
            a = (a+b);
            b = a - b;
            a = a - b;
        }

        let obj = new Solution();
        let res = obj.getXor(nums,a,b);
        if(res === -0)
            res = 0;
        console.log(res);
        
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number[]} nums - Array of numbers
 * @param {number} a - Starting index (inclusive)
 * @param {number} b - Ending index (inclusive)
 * @return {number} - XOR of elements from index a to b
 */

class Solution {

    getXor(nums, a, b) {
        // Initialize XOR result to 0
        let xorResult = 0;

        // Iterate through the range [a, b] and compute XOR of all elements
        for (let index = a; index <= b; index++) {
            xorResult = xorResult ^ nums[index];
        }

        // Return the final XOR result
        return xorResult;
    }
}
