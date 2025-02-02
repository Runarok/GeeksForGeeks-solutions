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
        let res = obj.minimumStep(n);
        if(res === -0)
            res = 0;
        console.log(res);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @return {number}
*/

class Solution {
    // Function to find the minimum steps to reduce n to 1
    minimumStep(n) {
        let res = 0; // Initialize the result counter
        while (n > 1) {
            if (n % 3 === 0) {
                res += 1; // If divisible by 3, divide by 3
                n = Math.floor(n / 3);
            } else {
                n -= 1; // Otherwise, subtract 1
                res += 1;
            }
        }
        return res; // Return the minimum number of steps
    }
}
