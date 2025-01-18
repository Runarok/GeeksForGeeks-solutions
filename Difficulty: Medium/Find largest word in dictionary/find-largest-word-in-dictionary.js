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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ');
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let s = readLine();
        let obj = new Solution();
        let res = obj.findLongestWord(s, arr);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @param {string[]} d
 * @returns {string}
 */

class Solution {
    findLongestWord(s, d) {
        // Helper function to check if word is a subsequence of s
        const isSubsequence = (s, word) => {
            let i = 0;
            for (let j = 0; j < word.length; j++) {
                while (i < s.length && s[i] !== word[j]) {
                    i++;
                }
                if (i === s.length) return false;
                i++;
            }
            return true;
        };
        
        // Sort dictionary by length (desc) and lexicographical order (asc)
        d.sort((a, b) => {
            if (a.length === b.length) {
                return a.localeCompare(b); // lexicographical order if lengths are equal
            }
            return b.length - a.length; // prioritize longer words
        });

        // Check each word in the sorted dictionary
        for (let word of d) {
            if (isSubsequence(s, word)) {
                return word;
            }
        }
        
        return ""; // No word can be formed
    }
}
