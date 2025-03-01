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
        obj.squareWall(a);
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

class Solution {
    squareWall(size) {
        // Outer loop to iterate through each row
        for (let row = 0; row < size; row++) {
            // Inner loop to print stars in each column
            for (let col = 0; col < size; col++) {
                process.stdout.write("* ");
            }
            // Move to the next line after each row
            process.stdout.write("\n");
        }
    }
}
