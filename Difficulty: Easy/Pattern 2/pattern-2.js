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
        obj.printTriangle(n);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N - The number of rows in the triangle to be printed.
 * @returns {void}
*/

class Solution {
    // Function to print a right-angled triangle pattern with N rows.
    printTriangle(N) {
        // Iterate through each row
        for (let row = 1; row <= N; row++) {
            // Initialize an empty string to build the current row pattern
            let rowPattern = "";

            // Append '*' to the row pattern for the number of columns in this row
            for (let col = 1; col <= row; col++) {
                rowPattern += "* ";
            }

            // Print the current row pattern
            console.log(rowPattern);
        }
    }
}
