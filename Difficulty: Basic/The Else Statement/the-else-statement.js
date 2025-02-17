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


//User function Template for javascript

class Solution {
    // Function to check if number is greater than 100
    utility(a) {
        // If a is greater than 100, print "Big"
        if (a > 100) {
            console.log("Big"); 
        } 
        // If a is less than or equal to 100, print "Number"
        else {
            console.log("Number");
        }
    }
}
