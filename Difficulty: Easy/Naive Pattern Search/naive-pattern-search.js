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
        let input_line = readLine().split(' ');
        let txt = input_line[0];
        input_line = readLine().split(' ');
        let pat = input_line[0];
        let obj = new Solution();
        if(obj.search(pat, txt))
        console.log("Yes");
        else
        console.log("No");
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} pat
 * @param {string} txt
 * @returns {Boolean}
*/

class Solution 
{
    // Function to check if the given pattern exists in the given string or not.
    search(pat, txt) 
    {
        let patternLength = pat.length;
        let textLength = txt.length;
        let i = 0;

        // Loop through the text until the remaining length is less than the pattern length.
        while (i <= textLength - patternLength) 
        {
            let j = 0;
            // Check if the current window matches the pattern.
            for (; j < patternLength; j++) {
                if (txt[i + j] != pat[j]) {
                    break;
                }
            }

            // If full pattern matched, return true.
            if (j == patternLength) {
                return true;
            }

            // If no characters matched, move window by one.
            if (j == 0) {
                i = i + 1;
            } 
            // If some characters matched, shift by the number of matched characters.
            else {
                i = i + j;
            }
        }

        // If pattern is not found in the entire text, return false.
        return false;
    }
}
