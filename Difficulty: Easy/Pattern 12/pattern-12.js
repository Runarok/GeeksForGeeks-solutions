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
        let N = parseInt(readLine());
        let obj = new Solution();
        obj.printTriangle(N);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number} N - The number of rows for the triangle pattern.
 * @returns {void}
 */

class Solution {
    // Function to print a symmetrical triangle pattern of numbers.
    printTriangle(N) {
        for (let row = 1; row <= N; row++) {
            let line = "";

            // First half of the row: increasing numbers from 1 up to current row number
            for (let col = 1; col <= N; col++) {
                if (col <= row) {
                    line += col + " ";
                } else {
                    line += "  ";  // Space to maintain triangular shape
                }
            }

            // Second half of the row: decreasing numbers from current row number to 1
            for (let col = N; col >= 1; col--) {
                if (col <= row) {
                    line += col + " ";
                } else {
                    line += "  ";  // Space to maintain triangular shape
                }
            }

            console.log(line);  // Print the constructed line for the current row
        }
    }
}
