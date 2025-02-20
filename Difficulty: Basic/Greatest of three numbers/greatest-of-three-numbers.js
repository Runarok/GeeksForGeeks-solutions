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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let A = input_ar1[0];
        let B = input_ar1[1];
        let C = input_ar1[2];
        let obj = new Solution();
        let res = obj.greatestOfThree(A, B, C);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @returns {number}
*/

class Solution {
    greatestOfThree(A, B, C) {
        // Function to return the greatest of three numbers
        if (A > B && A > C) {
            return A; // A is the largest
        } else if (B > A && B > C) {
            return B; // B is the largest
        } else {
            return C; // C is the largest
        }
    }
}
