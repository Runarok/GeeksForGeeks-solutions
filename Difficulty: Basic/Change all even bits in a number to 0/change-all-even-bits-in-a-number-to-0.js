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
        let res = obj.convertEvenBitToZero(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends




// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} n
 * @returns {number}
*/

class Solution {
    convertEvenBitToZero(n) {
        // Create a mask to clear bits at even positions (starting from 0)
        let mask = 0xAAAAAAAA; // Binary: 10101010101010101010101010101010
        
        // Use bitwise AND to keep bits at odd positions and set bits at even positions to 0
        return n & mask;
    }
}
