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
        let txt = readLine().trim();
        let pat = readLine().trim();
        let obj = new Solution();
        let res = obj.search(pat,txt);
        if(res === -0){
            res = 0;
        }
        console.log(res);
        
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {string} pat - The pattern string
 * @param {string} txt - The text string
 * @return {number} - Count of occurrences of anagram of `pat` in `txt`
 */

class Solution {
    search(pat, txt) {
        // Initialize a map to store character frequencies of pattern
        const charMap = new Map();
        let result = 0; // Variable to store count of anagram occurrences
        let i = 0; // Start index of the sliding window
        let j = 0; // End index of the sliding window
        let charCount; // Number of unique characters to match
        
        // Populate charMap with the frequency of characters in `pat`
        for (let i = 0; i < pat.length; i++) {
            if (charMap.has(pat[i])) {
                charMap.set(pat[i], charMap.get(pat[i]) + 1);
            } else {
                charMap.set(pat[i], 1);
            }
        }
        
        // Number of unique characters that need to be matched
        charCount = charMap.size;
        
        // Sliding window approach to find anagrams
        while (j < txt.length) {
            const currChar = txt[j];

            // If character exists in pattern, decrease its count in map
            if (charMap.has(currChar)) {
                charMap.set(currChar, charMap.get(currChar) - 1);

                // If a character frequency becomes zero, reduce charCount
                if (charMap.get(currChar) === 0) {
                    charCount--;
                }
            }

            // If window size is smaller than pattern length, expand the window
            if (j - i + 1 < pat.length) {
                j++;
            } 
            // When window size matches pattern length, check for valid anagram
            else if (j - i + 1 === pat.length) {
                // If all characters are matched, we found an anagram
                if (charCount === 0) {
                    result++;
                }

                // Slide window by removing first character from the left
                const firstChar = txt[i];

                if (charMap.has(firstChar)) {
                    // Restore the frequency of the removed character
                    charMap.set(firstChar, charMap.get(firstChar) + 1);

                    // If the restored character count becomes 1, increment charCount
                    if (charMap.get(firstChar) === 1) {
                        charCount++;
                    }
                }

                // Move window ahead
                i++;
                j++;
            }
        }
        return result; // Return count of anagram occurrences
    }
}
