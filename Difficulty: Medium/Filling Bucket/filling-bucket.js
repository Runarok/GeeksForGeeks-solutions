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
        let res = obj.fillingBucket(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

//User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
 */

class Solution {
    // Function to calculate the number of ways to fill the bucket
    fillingBucket(N) {
        if (N == 1) return 1;  // Base case: If there's only 1 step, only 1 way to fill the bucket

        let previous = 1;  // Previous number of ways to fill the bucket (f(n-1))
        let current = 1;   // Current number of ways to fill the bucket (f(n))
        let next = 0;      // Variable to hold the new number of ways (f(n+1))

        let mod = 100000000;  // Modulo value to prevent overflow and keep the result within the limit

        // Loop to calculate the number of ways to fill the bucket for each step from 2 to N
        for (let i = 2; i <= N; i++) {
            next = (previous + current) % mod;  // The new number of ways is the sum of the previous two
            previous = current;  // Update previous to current
            current = next;      // Update current to next
        }

        return next % mod;  // Return the result modulo mod
    }
}
