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
        obj.utility(a);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    utility(number) {
        // write your if statement here
        if (number > 100) {
            console.log("Big");
        }
        console.log("Number");
    }
}
