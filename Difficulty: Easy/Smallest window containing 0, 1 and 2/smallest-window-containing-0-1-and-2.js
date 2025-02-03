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
        let S = readLine().trim();
        let obj = new Solution();
        let res = obj.smallestSubstring(S);
        console.log(res);
    
console.log("~");
}
   
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} S
 * @returns {string}
 */

class Solution {
    // Function to find the smallest substring with exactly 3 unique characters
    smallestSubstring(s) {
      let characterCount = new Map();  // Map to store the count of characters in the current window
      let requiredUniqueCharCount = 3;  // We need exactly 3 unique characters
      let smallestLength = Number.MAX_SAFE_INTEGER;  // Initialize with the largest possible value
      
      let left = 0;  // Left pointer of the window
      let right = 0;  // Right pointer of the window
      
      // Traverse the string with the right pointer
      while(right < s.length) {
        // Increment the count of the character at the right pointer
        characterCount.set(s[right], (characterCount.get(s[right]) || 0) + 1); 
        
        // Check if the window has exactly 3 unique characters
        if(characterCount.size === requiredUniqueCharCount) {
            // While there are more than 1 occurrence of the leftmost character, move left pointer forward
            while(characterCount.get(s[left]) > 1) {
                characterCount.set(s[left], characterCount.get(s[left]) - 1);
                left++;
            }
            
            // Calculate the minimum length of the window
            smallestLength = Math.min(smallestLength, right - left + 1);  
        }
        right++;  // Move the right pointer to the next character
      }
      
      // If no valid substring is found, return -1, otherwise return the smallest length
      return smallestLength === Number.MAX_SAFE_INTEGER ? -1 : smallestLength;
    }
}
