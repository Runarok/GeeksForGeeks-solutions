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
        obj.gfSeries(n);
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n
 * @returns {void}
 */

class Solution {
    
    // Recursive helper function to compute the nth term in the series
    gfSeriesHelper(n) {
        if (n === 1) {
            return 0;
        }
        if (n === 2) {
            return 1;
        }
        return Math.pow(this.gfSeriesHelper(n - 2), 2) - this.gfSeriesHelper(n - 1);
    }
    
    // Function to generate and print the series up to the nth term
    gfSeries(n) {
        let termIndex = 1;
        let seriesResult = '';

        while (termIndex <= n) {
            seriesResult += this.gfSeriesHelper(termIndex) + ' ';
            termIndex++;
        }

        console.log(seriesResult.trim()); // Trim to remove trailing space
    }
}
