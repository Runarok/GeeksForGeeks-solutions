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
        let str = readLine().trim();
        let obj = new Solution();
        let res = obj.isPanagram(str);
        console.log(Number(res));
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} str
 * @return {boolean}
 */

class Solution {
    isPanagram(str){
       // Code here
       if (str.length < 26) {  // Check if string is shorter than 26 characters
           return false;
       }
       
       // Convert the string to lowercase for case-insensitive comparison
       str = str.toLowerCase();
       
       // Define the alphabet to check
       let alphabet = "abcdefghijklmnopqrstuvwxyz";
       let iMax = alphabet.length;
       
       // Loop through each letter in the alphabet
       for (let i = 0; i < iMax; i++) {
           // Check if the character is missing from the string
           if (str.indexOf(alphabet.charAt(i)) == -1) {
               return false;  // Return false if any letter is missing
           }
       }
       return true;  // Return true if all letters are found
    }
}
