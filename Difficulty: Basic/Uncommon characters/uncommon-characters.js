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
        let A = readLine();
        let B = readLine();
        let obj = new Solution();
        let res = obj.uncommonChars(A, B);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

// Function to find the uncommon characters in two strings
class Solution {
    uncommonChars(s1, s2) {
        // Frequency arrays to store character counts for both strings
        let freq1 = Array(256).fill(0);  // For string s1
        let freq2 = Array(256).fill(0);  // For string s2
        let res = []; // Array to store the result of uncommon characters
        
        // Count the frequency of each character in s1
        for (let i = 0; i < s1.length; i++) {
            freq1[s1.charCodeAt(i) - 97]++;  // Using ASCII value to index the frequency array
        }
        
        // Count the frequency of each character in s2
        for (let i = 0; i < s2.length; i++) {
            freq2[s2.charCodeAt(i) - 97]++;  // Using ASCII value to index the frequency array
        }
        
        // Iterate through all possible characters (a-z)
        for (let i = 0; i < 26; i++) {
            // If the character is found in one string but not the other, add it to the result
            if (freq1[i] > 0 && freq2[i] == 0 || (freq2[i] > 0 && freq1[i] == 0)) {
                res.push(String.fromCharCode(i + 97));  // Convert index back to character
            }
        }
        
        // Sort the result and return it as a string
        return res.sort().join('');
    }
}
