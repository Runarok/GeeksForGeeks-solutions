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
        let res = obj.beautySum(s);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for JavaScript
/**
 * @param {string} s
 * @returns {number}
 */

// Helper function to calculate the beauty value for an array of frequencies
function beauty(arr) {
    let mini = Infinity;  // Initialize minimum frequency to a very large value
    let maxi = -Infinity; // Initialize maximum frequency to a very small value

    // Iterate over the frequency array of characters (length 26 for a-z)
    for (let i = 0; i < 26; i++) {
        if (arr[i] > 0) {
            mini = Math.min(mini, arr[i]); // Update minimum frequency of characters present
        }
        maxi = Math.max(maxi, arr[i]); // Update maximum frequency of characters present
    }

    // Return the difference between the maximum and minimum frequencies
    return maxi - mini;
}

class Solution {
    // Function to find the sum of all beauty values for each sorted substring of the string
    beautySum(s) {
        const n = s.length;  // Get the length of the input string
        let ans = 0;         // Variable to store the sum of beauty values

        // Iterate over all starting points of substrings
        for (let i = 0; i < n; i++) {
            const freq = new Array(26).fill(0);  // Initialize an array to store the frequency of each character
            
            // Iterate over all ending points of substrings starting from index i
            for (let j = i; j < n; j++) {
                // Update the frequency of the current character in the substring
                freq[s.charCodeAt(j) - 97]++;
                // Add the beauty value of the current substring to the total answer
                ans += beauty(freq);
            }
        }

        // Return the sum of beauty values of all substrings
        return ans;
    }
}
