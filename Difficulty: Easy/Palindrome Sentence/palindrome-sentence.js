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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s = readLine();
        let obj = new Solution();
        let res = obj.sentencePalindrome(s);
        console.log(res);
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} s
 * @returns {boolean}
 */

class Solution {
    // Function to check whether the sentence is a valid palindrome.
    sentencePalindrome(s) {
        // Convert to lowercase and remove non-alphanumeric characters
        let original = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        
        // Reverse the cleaned string
        let reverse = original.split("").reverse().join("");
        
        // Check if original string is equal to reversed string
        return original === reverse;
    }
}
