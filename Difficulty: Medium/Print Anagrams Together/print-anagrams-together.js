//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {

        let arr = readLine().split(' ');
        let obj = new Solution();

        let ans = obj.anagrams(arr);
        ans.sort((a, b) => a[0].localeCompare(b[0]));
        for (let i = 0; i < ans.length; i++) {
            let temp = "";

            for (let j = 0; j < ans[i].length; j++) {
                temp += ans[i][j];
                temp += " ";
            }
            console.log(temp);
        }
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    anagrams(arr) {
        // Initialize a map to store grouped anagrams
        const anagramGroups = new Map();

        // Iterate over each word in the array
        for (let word of arr) {
            // Create a frequency array of size 26 (for lowercase letters 'a' to 'z')
            const charFrequency = new Array(26).fill(0);

            // Populate the frequency array for the current word
            for (let char of word) {
                charFrequency[char.charCodeAt(0) - 97]++;
            }

            // Convert the frequency array into a unique string representation
            const frequencyKey = charFrequency.join('');

            // If the key does not exist in the map, initialize a new list
            if (!anagramGroups.has(frequencyKey)) {
                anagramGroups.set(frequencyKey, []);
            }

            // Add the original word to the corresponding anagram group
            anagramGroups.get(frequencyKey).push(word);
        }

        // Convert the map values (arrays of anagram groups) to an array and return
        return Array.from(anagramGroups.values());
    }
}
