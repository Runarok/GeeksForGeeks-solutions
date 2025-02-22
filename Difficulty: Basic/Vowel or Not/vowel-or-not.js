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
    for (; i < t; i++) {
        let c = readLine().trim();
        let obj = new Solution();
        let res = obj.isVowel(c);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} c
 * @return {string}
 */
// Back-end complete function Template for JavaScript

class Solution {
    // Function to check if a given character is a vowel
    isVowel(c) {
        // Define an array containing all vowels (both lowercase and uppercase)
        let v = "aeiouAEIOU".split(""); 

        // Iterate through each vowel in the array
        for (let it of v) { 
            // If the current vowel matches the input character, return "YES"
            if (it === c) 
                return "YES"; 
        }

        // If no match is found, return "NO"
        return "NO"; 
    }
}
