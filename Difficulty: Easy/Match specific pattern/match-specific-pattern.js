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

function printArray(res, size) {
    let s="";
    for(let i=0;i<size;i++){
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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let  n = input_ar1[0];
        input_ar1 = readLine().split(' ');
        let dict = [];
        for(let i=0;i<n;i++){
            dict.push(input_ar1[i]);
        }
        let obj = new Solution();
        let pattern = readLine();
        let res = obj.findMatchedWords(dict, n, pattern);
        printArray(res,res.length);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string[]} dict
 * @param {number} n
 * @param {string} pattern
 * @returns {string[]} 
 */

class Solution {
    findMatchedWords(dict, n, pattern) {
        // Helper function to check if a word matches the given pattern
        const matches = (word, pattern) => {
            if (word.length !== pattern.length) return false;

            let charToPatternMap = {};  // Maps characters from the word to the pattern
            let patternToCharMap = {};  // Maps characters from the pattern to the word

            // Check each character position
            for (let i = 0; i < word.length; i++) {
                let wordChar = word[i];
                let patternChar = pattern[i];

                // Create mappings if they don't exist
                if (!charToPatternMap[wordChar]) charToPatternMap[wordChar] = patternChar;
                if (!patternToCharMap[patternChar]) patternToCharMap[patternChar] = wordChar;

                // If mapping breaks consistency, return false
                if (charToPatternMap[wordChar] !== patternChar || patternToCharMap[patternChar] !== wordChar) {
                    return false;
                }
            }
            return true;  // Word fully matches the pattern
        };

        // Filter the dictionary for words that match the given pattern
        return dict.filter((word) => matches(word, pattern));
    }
}
