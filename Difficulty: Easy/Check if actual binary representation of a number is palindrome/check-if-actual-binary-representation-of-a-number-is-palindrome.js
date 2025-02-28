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
        let res = obj.binaryPalin(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends




// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n - The input number.
 * @returns {number} - Returns 1 if binary representation is a palindrome, otherwise 0.
*/

class Solution {
    binaryPalin(n) {
        // Convert number to binary string.
        let binaryString = n.toString(2);
        
        // Length of the binary string.
        let binaryLength = binaryString.length;
        
        // Check if the binary string is a palindrome.
        for (let index = 0; index < Math.floor(binaryLength / 2); index++) {
            if (binaryString[index] !== binaryString[binaryLength - 1 - index]) {
                return 0; // Not a palindrome.
            }
        }
        
        // It is a palindrome.
        return 1;
    }
}
