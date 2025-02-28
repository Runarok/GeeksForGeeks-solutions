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
        let K = parseInt(readLine());
        let obj = new Solution();
        let res = obj.BoomNumber(K);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends






// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number} K
 * @returns {string}
 */

class Solution {
    // Function to find the nth bionic number.
    BoomNumber(K) {
        let x = 2;  // Initializing x to 2
        let s = ""; // Result string

        // Loop to find the appropriate value of x
        while (true) {
            // If K is greater than x, subtract x from K and multiply x by 2
            if (K > x) {
                K -= x;
                x *= 2;
            } else {
                break;
            }
        }

        // Loop to generate the BoomNumber string
        while (x > 1) {
            // Right shift x by 1 (divide by 2)
            x >>= 1;
            
            // If K is greater than x, add '3' to the string and subtract x from K
            if (K > x) {
                s += '3';
                K -= x;
            } else {
                s += '2';
            }
        }

        // Return the BoomNumber string
        return s;
    }
}
