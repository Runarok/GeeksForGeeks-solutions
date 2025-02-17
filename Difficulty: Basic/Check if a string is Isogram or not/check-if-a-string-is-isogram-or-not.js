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
        let s = input_line[0];
        let obj = new Solution();
        if(obj.isIsogram(s))
            console.log("1");
        else
            console.log("0");
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} s
 * @returns {boolean}
 */
class Solution 
{
    // Function to check if a string is Isogram or not.
    isIsogram(s)
    {
        // Create a Set to track unique characters
        let set = new Set();
        
        // Split string into individual characters
        let st = s.split("");

        // Iterate through the string
        for (let i = 0; i < st.length; i++) {
            // If the character is already in the set, it's not an Isogram
            if (set.has(st[i])) {
                return false;
            } else {
                // Otherwise, add the character to the set
                set.add(st[i]);
            }
        }

        // If no duplicate characters were found, return true
        return true;
    }
}
