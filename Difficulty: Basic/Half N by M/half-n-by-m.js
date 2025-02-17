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
 * @param {number} n - The number to be halved repeatedly
 * @param {number} m - The number of times to halve the number
 * @returns {number} - The value after halving the number (m-1) times
 */

class Solution{
    mthHalf(n, m){
        // If m is greater than 1, we proceed to halve the number
        if(m > 1){
            let results = []   // To store the intermediate results after each halving
            let currentValue = n  // Initialize with the original number
            for(let i = 0; i < m; i++){
                currentValue = currentValue / 2   // Halve the current value
                results.push(Math.floor(currentValue))  // Store the floored value after halving
            }
            return results[results.length - 2]  // Return the value before the last halving step
        } else {
            return n  // If m is not greater than 1, simply return the original number
        }
    }
}

