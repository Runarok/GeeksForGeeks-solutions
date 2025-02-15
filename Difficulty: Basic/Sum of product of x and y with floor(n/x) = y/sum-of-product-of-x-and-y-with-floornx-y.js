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
        let res = obj.sumofproduct(n);
        if(res===-0){
            res = 0;
        }
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n
 * @return {number}
 */
class Solution {
    // Function to calculate the sum of products based on given conditions
    sumofproduct(n) {
        let sum = 0;
        
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (Math.floor(n / i) === j) {
                    sum += i * j;
                }
            }
        }
        
        return sum;
    }
}
