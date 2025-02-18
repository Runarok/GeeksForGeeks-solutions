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

function printArray(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < res[i].length; j++) {
            s += res[i][j];
            s += " ";
        }
        s += "$";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let str1 = readLine();
        let str2 = readLine();
        let obj = new Solution();
        let res = obj.remAnagram(str1, str2);
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */

class Solution {
    // Function to calculate the number of deletions required to make the two strings anagrams
    remAnagram(s1, s2) {
        // Create an array to store the frequency of each character in the first string
        let freq1 = new Array(26);
        freq1.fill(0);
        
        // Count the frequency of characters in the first string
        for (let i = 0; i < s1.length; i++) {
            freq1[s1.charCodeAt(i) - 97]++;
        }

        // Decrease the frequency of characters based on the second string
        for (let j = 0; j < s2.length; j++) {
            freq1[s2.charCodeAt(j) - 97]--;
        }

        // Variable to store the total number of deletions required
        let deletion = 0;

        // Calculate the total deletions by adding the absolute values of the frequency differences
        for (let k = 0; k < 26; k++) {
            deletion += Math.abs(freq1[k]);
        }

        // Return the total deletions
        return deletion;
    }
}
