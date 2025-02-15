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
        let S = String(readLine());
        let obj = new Solution();
        let res = obj.magicalString(S);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} S
 * @returns {string}
 */

class Solution {
    // Function to generate the magical string by transforming each character
    magicalString(S) {
        let magicalStr = '';

        // Iterate through each character in the input string
        for (let i = 0; i < S.length; i++) {
            // Transform the character based on the given magical transformation
            let magicalChar = String.fromCharCode('a'.charCodeAt(0) + ('z'.charCodeAt(0) - S.charCodeAt(i)));

            // Append the transformed character to the result string
            magicalStr += magicalChar;
        }

        // Return the transformed magical string
        return magicalStr;
    }
}
