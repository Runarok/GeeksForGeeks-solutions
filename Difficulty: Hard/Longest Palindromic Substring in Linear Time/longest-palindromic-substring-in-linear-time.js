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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let str = readLine();
        let obj = new Solution();
        let res = obj.LongestPalindromeSubString(str);
        console.log(res);
        
    }
}// } Driver Code Ends

// } Driver Code Ends

class Solution {
    // Function to find the longest palindromic substring using Manacher's algorithm
    LongestPalindromeSubString(text) {
        // Return an empty string if the input is empty or null
        if (!text || text.length === 0) return "";

        // Transform the string by inserting '#' between characters to handle both even and odd length palindromes
        let transformedString = '#' + text.split('').join('#') + '#';
        const n = transformedString.length;
        const p = new Array(n).fill(0); // Array to store the radius of palindromes centered at each character
        let center = 0, right = 0, maxLen = 0, start = 0;

        // Iterate over each character in the transformed string
        for (let i = 0; i < n; i++) {
            // Calculate the mirror index of the current character around the center
            const mirror = 2 * center - i;

            // If the current position is within the right boundary of the palindrome, 
            // we can use the previously computed palindrome length from the mirror position
            if (i < right) {
                p[i] = Math.min(right - i, p[mirror]);
            }

            // Expand the palindrome around the center as much as possible
            while (i + p[i] + 1 < n && i - p[i] - 1 >= 0 &&
                   transformedString[i + p[i] + 1] === transformedString[i - p[i] - 1]) {
                p[i]++;
            }

            // Update the center and the right boundary if the palindrome extends beyond the current right boundary
            if (i + p[i] > right) {
                center = i;
                right = i + p[i];
            }

            // Track the longest palindrome and its starting index
            if (p[i] > maxLen) {
                maxLen = p[i];
                start = (i - maxLen) / 2;  // Convert back to the original string indices
            }
        }

        // Return the longest palindromic substring
        return text.substring(start, start + maxLen);
    }
}
