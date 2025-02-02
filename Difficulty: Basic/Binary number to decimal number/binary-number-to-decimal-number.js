//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let str = readLine();
        let obj = new Solution();
        console.log(obj.binaryToDecimal(str));

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

class Solution {
    // Function to convert a binary string to its decimal equivalent
    binaryToDecimal(b) {
        // Parse the binary string 'b' and convert it to a decimal number using parseInt
        return parseInt(b, 2);  // '2' denotes that the number is in binary format
    }
}

