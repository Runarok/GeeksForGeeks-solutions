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
        obj.printTillN(n);
        
    }
}// } Driver Code Ends





// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n
 * @returns {void}
 */

class Solution {
    // Function to print numbers from 1 to n using recursion
    printTillN(n) {
        this.printNumbers(1, n);
        console.log(""); // Print a newline at the end
    }

    // Helper function for recursive printing
    printNumbers(current, n) {
        if (current > n) return; // Base case: stop when current exceeds n

        process.stdout.write(current + " "); // Print the current number
        this.printNumbers(current + 1, n); // Recursive call for the next number
    }
}
