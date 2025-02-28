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
    for(;i<t;i++)
    {
        let str1 = readLine();
        let str2 = readLine();
        let obj = new Solution();
        console.log(obj.extraChar(str1, str2));
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

class Solution {
    // Function to find the extra character in the second string.
    extraChar(s1, s2) {
        // Initialize XOR result.
        let xorResult = 0;

        // XOR all characters in the first string.
        for (let char of s1) {
            xorResult ^= char.charCodeAt(0);
        }

        // XOR all characters in the second string.
        for (let char of s2) {
            xorResult ^= char.charCodeAt(0);
        }

        // Convert the final XOR result back to a character.
        return String.fromCharCode(xorResult);
    }
}
