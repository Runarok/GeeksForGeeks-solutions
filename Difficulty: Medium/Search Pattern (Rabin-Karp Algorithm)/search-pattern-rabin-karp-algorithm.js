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

/* Function to print an array */
function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let s = readLine();
        let pat = readLine();
        let obj = new Solution();
        let res = obj.search(pat, s);
        printArray(res, res.length);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} pat
 * @param {string} txt
 * @returns {number[]}
*/

class Solution {
    search(pattern, txt) {
        let patternLength = pattern.length;
        let textLength = txt.length;

        // If the pattern is longer than the text, no matches can be found
        if (textLength < patternLength) return [];

        let result = [];  // To store starting indices of matching substrings
        let base = 256;  // Base value for hash calculation (typically the number of characters in the alphabet)
        let primeNoForMod = 1e9 + 7;  // Prime modulus to avoid hash collisions
        let patternHash = 0;  // Hash value for the pattern
        let textHash = 0;  // Hash value for the current window in the text
        let hashMultiplier = 1;  // Multiplier for the most significant character in the pattern (base^(patternLength-1))

        // Compute base^(patternLength-1) % primeNoForMod
        for (let i = 1; i <= (patternLength - 1); i++) {
            hashMultiplier = (hashMultiplier * base) % primeNoForMod;
        }

        // Calculate the initial hash values for both the pattern and the first window in the text
        for (let i = 0; i < patternLength; i++) {
            patternHash = (patternHash * base + pattern.charCodeAt(i)) % primeNoForMod;
            textHash = (textHash * base + txt.charCodeAt(i)) % primeNoForMod;
        }

        // Slide the window across the text and compare hash values
        for (let i = 0; i <= (textLength - patternLength); i++) {
            // If hashes match, check the actual substring characters
            if (patternHash === textHash) {
                let j = 0;
                // Verify the match character by character
                while (j < patternLength && txt[i + j] === pattern[j]) {
                    j++;
                }
                // If full match is found, add the starting index to the result
                if (j === patternLength) result.push(i + 1);
            }

            // If we have more windows to check, compute the hash for the next window
            if (i < (textLength - patternLength)) {
                // Remove the first character of the current window
                textHash = (textHash - (txt.charCodeAt(i) * hashMultiplier)) % primeNoForMod;

                // Shift the remaining characters' hash value left
                textHash = (textHash * base) % primeNoForMod;

                // Add the next character to the hash value
                textHash = (textHash + txt.charCodeAt(i + patternLength)) % primeNoForMod;

                // Ensure the hash remains positive
                if (textHash < 0) {
                    textHash += primeNoForMod;
                }
            }
        }

        return result;
    }
}
