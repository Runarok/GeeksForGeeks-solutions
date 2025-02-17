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
        let res = obj.maximum_Cuts(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n - The number to calculate the maximum cuts for
 * @returns {number} - The maximum cuts that can be achieved for the given number
 */

class Solution {
    // Function to calculate the maximum cuts possible for a given number n
    maximum_Cuts(n) {
        // If n is 1, return 2 as the result
        if (n === 1) return 2;
        
        // If n is 2, return 4 as the result
        if (n === 2) return 4;
        
        // For n greater than 2, calculate recursively
        return this.maximum_Cuts(n - 1) + n; 
    }
}
