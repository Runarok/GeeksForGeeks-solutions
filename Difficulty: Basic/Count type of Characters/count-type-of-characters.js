//{ Driver Code Starts
//Initial Template for javascript

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

function printList(res = []){
    for(let i=0;i<res.length;i++){
        console.log(res[i]);
    }
    
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let s = readLine();
        let obj = new Solution();
        let res = obj.count(s);
        printList(res);
        
    
console.log("~");
}
}// } Driver Code Ends





// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} s - Input string to analyze
 * @returns {number[]} - Array containing the count of uppercase letters, lowercase letters, digits, and other characters
 */
class Solution {
    count(s) {
        // Initialize an array to store counts for [uppercase, lowercase, digits, other characters]
        let res = [0, 0, 0, 0];
        
        // Loop through each character in the string
        for (let i = 0; i < s.length; i++) {
            // Check if the character is uppercase
            if (s[i] >= 'A' && s[i] <= 'Z') {
                res[0]++;
            }
            // Check if the character is lowercase
            else if (s[i] >= 'a' && s[i] <= 'z') {
                res[1]++;
            }
            // Check if the character is a digit
            else if (s[i] >= '0' && s[i] <= '9') {
                res[2]++;
            }
            // Otherwise, count as other character
            else {
                res[3]++;
            }
        }
        
        // Return the array of counts
        return res;
    }
}
