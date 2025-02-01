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
    let i = 0;
    for (; i < t; i++) {

        let arr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let ans = obj.possibleWords(arr);
        ans.sort();
        let res = '';
        for (let i = 0; i < ans.length; i++) {
            res += ans[i];
            res += " ";
        }
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number[]} arr
 * @returns {string[]}
 */

class Solution {
    // Function to generate all possible words from a phone number.
    dfs(index, currentWord, keyMap, result) {
        // Base case: if index is equal to the length of the keyMap, add the current word to the result
        if (index >= keyMap.length) {
            result.push(currentWord);
            return;
        }

        // Recursively add each character corresponding to the current digit
        for (let char of keyMap[index]) {
            this.dfs(index + 1, currentWord + char, keyMap, result);
        }
    }

    // Function to find all possible words from the digits in the array
    possibleWords(arr) {
        // Define the mapping of digits to corresponding characters
        const keyMap = [
            0, 1, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"
        ];

        let result = [];  // Initialize the result array
        let dp = [];  // Initialize the key map for the input digits

        // Build the key map based on the input array of digits
        for (let digit of arr) {
            dp.push(keyMap[digit]);
        }

        // Call the recursive DFS function to generate possible words
        this.dfs(0, '', dp, result);

        // Return the list of generated words
        return result;
    }
}
