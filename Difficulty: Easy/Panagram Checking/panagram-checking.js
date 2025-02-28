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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let input_line = readLine();
        let s = input_line;
        let obj = new Solution();
        let ans;
        if (obj.checkPangram(s))
            ans = "true";
        else
            ans = "false";
        console.log(ans);

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} str
 * @returns {boolean}
 */

class Solution {
    // Function to check if a string is Pangram or not.
    checkPangram(inputString) {
        let stringLength = inputString.length;

        // If the string has fewer than 26 characters, it can't be a pangram.
        if (stringLength < 26) {
            return false;
        }

        // Object to keep track of each letter's presence.
        let letterCountMap = {};

        for (let i = 0; i < stringLength; i++) {
            let currentChar = inputString[i];

            // Consider only alphabetic characters, and convert to lowercase.
            if ((currentChar >= 'a' && currentChar <= 'z') || 
                (currentChar >= 'A' && currentChar <= 'Z')) 
            {
                let lowercaseChar = currentChar.toLowerCase();
                letterCountMap[lowercaseChar] = (letterCountMap[lowercaseChar] || 0) + 1;
            }
        }

        // Check if all 26 letters are present.
        if (Object.keys(letterCountMap).length === 26) {
            return true;
        }

        return false;
    }
}
