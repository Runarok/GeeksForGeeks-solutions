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
        let K = input_ar1[2];
        let obj = new Solution();
        let res = obj.kthDigit(A, B, K);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends




// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} A
 * @param {number} B
 * @param {number} K
 * @returns {number}
*/

class Solution {
    kthDigit(A, B, K) {
        // Step 1: Calculate A^B
        let result = Math.pow(A, B);
        
        // Step 2: Convert result to a string
        let resultStr = result.toString();
        
        // Step 3: Get the K-th digit from the right
        let digitFromRight = resultStr[resultStr.length - K];
        
        // Step 4: Return the digit (as a number)
        return parseInt(digitFromRight);
    }
}
