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
        let X = input_ar1[0];
        let Y = input_ar1[1];
        let obj = new Solution();
        let res = obj.isPowerOfAnother(X, Y);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript



/**
 * @param {number} X
 * @param {number} Y
 * @returns {number}
*/

class Solution{
    isPowerOfAnother(X, Y){
        
        // Optimized solution
        // Base cases:
        if (X == 1) return Y == 1 ? 1 : 0;  // 1^k = 1, but no other number
        if (Y == 1) return 1;               // Any number to the power 0 is 1
        if (X == 0) return Y == 0 ? 1 : 0;  // 0^k = 0 (except 0^0)

        // Check if Y can be divided by X repeatedly until it becomes 1
        while (Y > 1) {
            if (Y % X !== 0) return 0; // If not divisible, return false
            Y /= X;  // Reduce Y by dividing by X
        }
        
        // True if we reach exactly 1
        return Y == 1 ? 1 : 0;
    }
}
