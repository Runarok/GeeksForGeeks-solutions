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
        let s = readLine();
        
        let obj = new Solution();
        let res = obj.removeConsecutiveCharacter(s);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends




// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {string} s - Input string
 * @returns {string} - String after removing consecutive duplicate characters
 */

class Solution {
    removeConsecutiveCharacter(s) {
        // Initialize an array to store the final characters after removing consecutive duplicates
        let resultArray = [];

        // Iterate through each character of the string
        for (let i = 0; i < s.length; i++) {
            // If the last character added to resultArray is not the same as the current character, add it
            if (resultArray[resultArray.length - 1] !== s[i]) {
                resultArray.push(s[i]);
            }
        }

        // Convert the array back to a string and return the result
        return resultArray.join('');
    }
}
