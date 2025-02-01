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
        let n = input_ar1[0];
        let k = input_ar1[1];
        let obj = new Solution();
        let res = obj.setKthBit(n, k);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */

class Solution {
    
    // Function to set the kth bit of number 'n' to 1
    setKthBit(n, k) {
        // Set the kth bit using bitwise OR with a left-shifted 1 (1 << k)
        n = n | (1 << k);
        
        return n; // Return the updated number with the kth bit set to 1
    }
}
