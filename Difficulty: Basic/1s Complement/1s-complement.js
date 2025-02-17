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
        let arr = new Array(n);
        let s = readLine();
        let obj = new Solution();
        let res = obj.onesComplement(s , n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} binaryString - The binary string to find the one's complement of.
 * @param {number} length - The length of the binary string.
 * @returns {string} - The one's complement of the input binary string.
 */
class Solution {
    onesComplement(binaryString, length) {
        let complementString = '';

        // Iterate through each character of the binary string
        for (let i = 0; i < length; i++) {
            // Flip '0' to '1' and '1' to '0'
            if (binaryString[i] === '0') {
                complementString += '1';
            } else if (binaryString[i] === '1') {
                complementString += '0';
            }
        }

        // Return the computed one's complement string
        return complementString;
    }
}

