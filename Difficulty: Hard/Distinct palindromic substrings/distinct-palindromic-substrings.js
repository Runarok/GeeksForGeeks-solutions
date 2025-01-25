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
        let Str = readLine().trim();
        let obj = new Solution();
        let res = obj.palindromeSubStrs(Str);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} Str
 * @returns {number}
*/

class Solution {
    //Function to find the count of palindromes that can be formed
    palindromeSubStrs(str) {
        let n = str.length;
        let distinctPalindromes = new Set();

        // Expand Around Center approach
        // Function to expand around a center and add palindromes to the set
        function expandAroundCenter(left, right) {
            while (left >= 0 && right < n && str[left] === str[right]) {
                distinctPalindromes.add(str.substring(left, right + 1));
                left--;
                right++;
            }
        }

        // For each possible center, expand around it
        for (let i = 0; i < n; i++) {
            // Odd-length palindromes (centered at i)
            expandAroundCenter(i, i);
            // Even-length palindromes (centered between i and i+1)
            expandAroundCenter(i, i + 1);
        }

        // The size of the set will give us the number of distinct palindromic substrings
        return distinctPalindromes.size;
    }
}
