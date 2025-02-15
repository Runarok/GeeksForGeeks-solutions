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
        let res = obj.countCamelCase(s);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    countCamelCase(inputString) {
        // Helper function to check if a character is uppercase
        let isUpperCase = (character) => {
            return character >= 'A' && character <= 'Z';
        };

        // Initialize counter for uppercase letters
        let uppercaseCount = 0;

        // Iterate through the string and count uppercase letters
        for (let index = 0; index < inputString.length; index++) {
            if (isUpperCase(inputString[index])) {
                uppercaseCount++;
            }
        }

        // Return the total count of uppercase letters
        return uppercaseCount;
    }
}
