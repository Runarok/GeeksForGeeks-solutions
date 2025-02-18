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
        let n1 = readLine();
        let n2 = readLine();
        let obj = new Solution();
        let res = obj.EvenOdd(n1, n2);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} n1 - The first string representing a number
 * @param {string} n2 - The second string representing a number
 * @returns {number} - Returns 1 if the last digit of either number is even, otherwise 0
 */

class Solution {
    EvenOdd(n1, n2) {
        // Get the last digit of the first number
        let lastDigitOfn1 = n1.charAt(n1.length - 1);
        
        // Get the last digit of the second number
        let lastDigitOfn2 = n2.charAt(n2.length - 1);
        
        // Check if the last digit of either number is even
        if ((lastDigitOfn1 % 2 === 0) || (lastDigitOfn2 % 2 === 0)) {
            // If either digit is even, return 1
            return 1;
        } else {
            // If both digits are odd, return 0
            return 0;
        }
    }
}
