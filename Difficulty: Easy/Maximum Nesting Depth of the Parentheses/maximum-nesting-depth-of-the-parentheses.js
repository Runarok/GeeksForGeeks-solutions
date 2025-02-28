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
        let s = readLine().trim();
        let obj = new Solution();
        let ans=obj.maxDepth(s);
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} s
 * @returns {number}
*/

class Solution
{
    // Function to find the maximum depth of nested parentheses.
    maxDepth(s)
    {
        let openCount = 0;     // Tracks the current number of open parentheses.
        let maxDepth = 0;      // Tracks the maximum depth encountered.

        for (const character of s) {
            if (character === "(") {
                openCount++;
            }

            if (character === ")") {
                openCount--;
            }

            maxDepth = Math.max(openCount, maxDepth); // Update maximum depth.
        }

        return maxDepth;
    }
}
