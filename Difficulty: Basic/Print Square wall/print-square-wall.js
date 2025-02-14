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
        let s = parseInt(readLine());
        let obj = new Solution();
        obj.squareWall(s);
        //console.log('');
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
  squareWall(s) {
    // Create a string that represents one row of the wall using string multiplication
    const row = '* '.repeat(s).trim(); // Multiply '*' and space S times and trim the trailing space
    
    // Print the row S times using a single loop
    for (let i = 0; i < s; i++) {
      console.log(row); // Print each row
    }
  }
}
