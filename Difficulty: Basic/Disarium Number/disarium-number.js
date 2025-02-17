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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        
        let obj = new Solution();
        let res = obj.isDisarium(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends




// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n - The number to check if it is a Disarium number.
 * @returns {number} - Returns 1 if the number is a Disarium number, otherwise returns 0.
 */

class Solution {
    isDisarium(n) {
        // Convert the number to a string, split it into digits, and calculate the sum of digits raised to their positions
        let sum = n
            .toString()
            .split("")
            .reduce((acc, digit, index) => acc + Number(digit) ** (index + 1), 0);

        // Return 1 if the sum equals the original number, otherwise return 0
        return sum === n ? 1 : 0;
    }
}
