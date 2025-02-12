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
        let str = readLine();
        let obj = new Solution();
        let res = obj.removeConsonants(str);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} s
 * @returns {string}
 */

class Solution {
    // Function to remove consonants from a string and return only vowels.
    removeConsonants(s) {
        // Array to store vowels
        let vowels = [];
        
        // String to return if no vowels are found
        let noVowelMessage = "No Vowel";

        // Iterate through the string and collect vowels
        for (let char of s) {
            if ("aeiouAEIOU".includes(char)) {
                vowels.push(char);
            }
        }

        // Return the string of vowels or "No Vowel" if none are found
        return vowels.length > 0 ? vowels.join("") : noVowelMessage;
    }
}
