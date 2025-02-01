//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;

    for (; i < t; i++) {
        let s = readLine().trim();
        let obj = new Solution();
        const str = s.substring(1, s.length - 1);
        let res = obj.reverseWords(str);
        console.log(`"${res}"`);

        console.log("~");
    }
}
// } Driver Code Ends

class Solution {
    /**
     * Reverses each word in the given string while maintaining word order.
     * @param {string} s - Input string containing words.
     * @returns {string} - The transformed string with reversed words.
     */
    reverseWords(s) {
        // Split the string into words based on spaces
        const wordsArray = s.split(" ");

        // Array to store words after removing extra spaces
        const filteredWords = [];

        // Iterate through each word, trimming spaces and filtering out empty entries
        for (let i = 0; i < wordsArray.length; i++) {
            const word = wordsArray[i].trim();
            if (word.length === 0) {
                continue;
            }
            filteredWords.push(word);
        }

        // Reverse each word individually
        for (let i = 0; i < filteredWords.length; i++) {
            filteredWords[i] = this.reverseString(filteredWords[i]);
        }

        // Join the transformed words back into a string
        return filteredWords.join(" ").trim();
    }

    /**
     * Helper function to reverse a string.
     * @param {string} word - The word to reverse.
     * @returns {string} - The reversed word.
     */
    reverseString(word) {
        let charArray = word.split("");
        let left = 0;
        let right = charArray.length - 1;

        // Swap characters from both ends moving towards the center
        while (left <= right) {
            [charArray[left], charArray[right]] = [charArray[right], charArray[left]];
            left++;
            right--;
        }

        return charArray.join("");
    }
}
