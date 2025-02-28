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
        let obj = new Solution();
        let res = obj.isRotatedPalindrome(s);
        if(res)
        console.log(1);
        else
        console.log(0);
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} s
 * @returns {boolean}
*/

class Solution {
    // Function to check whether the given string is a rotated palindrome.
    isRotatedPalindrome(s) {
        const isOddLength = s.length % 2 === 1;
        const halfLength = Math.floor(s.length / 2);
        
        // Initial split of the string into two halves
        let startIndex = isOddLength ? 1 : 0;
        let firstHalf = s.substr(startIndex, halfLength);
        let secondHalf = s.substr(startIndex + halfLength, halfLength).split('').reverse().join('');
        
        // Check if the string is already a palindrome
        if (firstHalf === secondHalf) {
            return true;
        }
        
        // Rotate and check for palindrome at each rotation
        for (let i = 1; i < s.length; i++) {
            // Rotate characters: move the last character of secondHalf to the start of firstHalf
            const lastChar = secondHalf[secondHalf.length - 1];
            firstHalf = firstHalf.substr(1) + lastChar;
            secondHalf = s[i - 1] + secondHalf.substr(0, secondHalf.length - 1);
            
            // Check if the halves match (palindrome check)
            if (firstHalf === secondHalf) {
                return true;
            }
        }
        
        return false;
    }
}
