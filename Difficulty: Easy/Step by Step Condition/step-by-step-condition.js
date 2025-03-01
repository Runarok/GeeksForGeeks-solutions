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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(; i<t; i++) {
        let a = parseInt(readLine());
        let obj = new Solution();
        obj.stepByStep(a);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

class Solution {
    stepByStep(n) {
        // Check if the number is divisible by 11
        if (n % 11 == 0) {
            console.log("Eleven");
        }
        // Check if the number is divisible by 3
        else if (n % 3 == 0) {
            console.log("Three");
        }
        // Check if the number is divisible by 2
        else if (n % 2 == 0) {
            console.log("Two");
        }
        // If none of the conditions match, print -1
        else {
            console.log("-1");
        }
    }
}
