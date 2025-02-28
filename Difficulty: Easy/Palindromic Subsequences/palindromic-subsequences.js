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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = input_line[0];
        
        input_line = readLine().split(' ');
        let s = input_line[0];
        
        
        let obj = new Solution();
        let ans = obj.MinRemove(n, s);
        if(ans ===-0)
        ans = 0;
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} n
 * @param {string} s
 * @returns {string}
*/

class Solution {
    // Function to find the minimum number of characters that must be deleted
    // to make the string equal to some subsequence of the given string.
    MinRemove(n, s) {
        // Reverse the string to check for palindrome
        let reversedString = s.split('').reverse().join('');
        
        // If the string is already a palindrome, only 1 removal is needed.
        if (s === reversedString) {
            return "1";
        } else {
            // If not a palindrome, at least 2 removals are needed.
            return "2";
        }
    }
}
