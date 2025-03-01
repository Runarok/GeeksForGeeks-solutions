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
        obj.printTable(n);
        
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


// User function Template for JavaScript

/**
 * Function to print the multiplication table for a given number.
 * @param {number} n - The number for which the multiplication table is to be printed.
 * @returns {void}
 */
class Solution {
    printTable(n) {
        let tableValues = [];  // Array to store multiplication results
        let currentMultiplier = 10;  // Starting multiplier from 10

        while (currentMultiplier > 0) {
            tableValues.push(n * currentMultiplier);  // Calculate and store the product
            currentMultiplier--;  // Decrement multiplier for next iteration
        }

        console.log(...tableValues);  // Output all values in a single line, space-separated
    }
}
