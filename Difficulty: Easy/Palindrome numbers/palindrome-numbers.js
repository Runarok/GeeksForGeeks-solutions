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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.isPallindrome(N);
        console.log(res);
    
console.log("~");
}
}


// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
*/

class Solution {
    isPallindrome(N) {
        // Convert the number to binary (without the '0b' prefix)
        let binNum = N.toString(2);

        // Check if the binary number is equal to its reverse
        if (binNum === binNum.split('').reverse().join('')) {
            return 1;
        } else {
            return 0;
        }
    }
}
