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
        let m = input_ar1[1];
        let obj = new Solution();
        let res = obj.mthHalf(n, m);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n
 * @param {number} m
 * @returns {number}
 */

class Solution{
    mthHalf(n, m){
        // code here
        if(m > 1){
            let ans = []
            let val = n
            for(let i = 0; i < m; i++){
                val = val / 2
                ans.push(Math.floor(val))
            }
            return ans[ans.length - 2]
        } else {
            return n
        }
    }
}
