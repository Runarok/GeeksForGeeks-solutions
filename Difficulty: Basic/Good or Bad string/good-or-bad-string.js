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
        let S = readLine();
        let obj = new Solution();
        let res = obj.isGoodorBad(S);
        if(res===""){
            res = "a";
        }
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

// User function Template for javascript
/**
 * @param {string} S
 * @returns {string}
 */

class Solution {
    // Function to check whether the string is good or bad.
    isGoodorBad(S) {
         const vowels = new Set(['a', 'e', 'i', 'o', 'u']); // Set to store vowels
        let maxConsonants = 0, maxVowels = 0;  // Variables to store the maximum consecutive consonants and vowels
        let currentConsonants = 0, currentVowels = 0; // Variables to count current consecutive consonants and vowels

        // Loop through each character in the string
        for (let char of S) {
            if (char === '?') {
                currentConsonants++;  // Treat '?' as a consonant and increase consonant count
                currentVowels++;      // Treat '?' as a vowel and increase vowel count
            }
            else if (vowels.has(char)) {
                currentVowels++;      // Increase vowel count if the character is a vowel
                currentConsonants = 0; // Reset consonant count if the character is a vowel
            }
            else {
                currentConsonants++;  // Increase consonant count for non-vowel characters
                currentVowels = 0;     // Reset vowel count for non-vowel characters
            }
            
            // Update the maximum consonant and vowel streaks
            maxConsonants = Math.max(maxConsonants, currentConsonants);
            maxVowels = Math.max(maxVowels, currentVowels);
            
            // If the number of consecutive consonants exceeds 3 or vowels exceeds 5, return 0 (bad string)
            if (maxConsonants > 3 || maxVowels > 5) {
                return 0;
            }
        }

        // Return 1 (good string) if the conditions for being "bad" are not met
        return 1;
    }
}
