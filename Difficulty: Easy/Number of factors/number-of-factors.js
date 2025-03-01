//{ Driver Code Starts
// Initial Template for javascript
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
        let res = obj.countFactors(n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Function to count the number of factors of N.
    countFactors(N) {
        let count = 0;

        // Loop through all numbers from 1 to N
        for (let i = 1; i <= N; i++) {
            // If N is divisible by i, increment the count
            if (N % i === 0) {
                count++;
            }
        }

        // Return the total count of factors
        return count;
    }
}
