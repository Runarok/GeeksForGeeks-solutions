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
        let s = readLine();
        let pos = parseInt(readLine());
        let obj = new Solution();
        let res = obj.closing(s,pos);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {string} s - The input string containing brackets.
 * @param {number} pos - The position of the opening bracket '['.
 * @return {number} - The position of the corresponding closing bracket ']'.
*/

class Solution {
    closing(s, pos) {
        // Counter to track unmatched opening brackets.
        let openBracketCount = 0;

        // Traverse the string starting from the given position.
        for (let index = pos; index < s.length; index++) {
            if (s[index] === '[') {
                openBracketCount++; // Found an opening bracket.
            }

            if (s[index] === ']') {
                openBracketCount--; // Found a closing bracket.
                
                // If all brackets have been matched, return the current index.
                if (openBracketCount === 0) {
                    return index;
                }
            }
        }
    }
}
