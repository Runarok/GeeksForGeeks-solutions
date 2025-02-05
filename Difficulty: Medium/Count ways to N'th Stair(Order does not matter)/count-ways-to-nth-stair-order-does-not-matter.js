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
        let res = obj.nthStair(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends




// } Driver Code Ends

class Solution {
    /**
     * Function to calculate the number of ways to reach the nth stair.
     * The problem assumes the number of ways to reach a stair follows a simple pattern.
     * @param {number} n - The stair number we want to calculate the number of ways for.
     * @returns {number} - The number of ways to reach the nth stair.
     */
    nthStair(n) {
        // The solution assumes that the number of ways to reach the nth stair
        // follows the pattern of half of the value of n (rounded down) + 1.
        return Math.floor(n / 2) + 1;
    }
}
