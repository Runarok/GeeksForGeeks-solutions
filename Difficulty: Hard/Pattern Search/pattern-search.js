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
    }
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} pat (pattern (to be searched in txt) given in the input)
 * @param {string} txt  (string given in the input)
 * @returns {Boolean}
*/

class Solution {
    // Function to check if the given pattern exists in the given string or not.
    search(pat, txt) {
        // Return true if the pattern is found in the string, else return false
        return txt.includes(pat);
    }
}
