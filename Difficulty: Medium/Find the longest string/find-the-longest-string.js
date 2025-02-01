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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ');
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.longestString(arr, n));
        
    
console.log("~");
}
}
// } Driver Code Ends

// User-defined function Template for JavaScript  

/**  
 * Class representing a Trie Node  
 */  
class TrieNode {  
    constructor() {  
        // Array to store references to child nodes  
        this.children = new Array(26);  
        this.isCompleteWord = false;  
    }  

    // Checks if the current node contains a given character  
    containsChar(char) {  
        return this.children[char.charCodeAt(0) - 'a'.charCodeAt(0)] !== undefined;  
    }  

    // Adds a new node reference for a character  
    addChar(char, node) {  
        this.children[char.charCodeAt(0) - 'a'.charCodeAt(0)] = node;  
    }  

    // Retrieves the node reference for a character  
    getNode(char) {  
        return this.children[char.charCodeAt(0) - 'a'.charCodeAt(0)];  
    }  

    // Marks the current node as the end of a word  
    markAsEnd() {  
        this.isCompleteWord = true;  
    }  

    // Checks if the current node represents the end of a word  
    isEndOfWord() {  
        return this.isCompleteWord;  
    }  
}  

/**  
 * Class representing a Trie Data Structure  
 */  
class Trie {  
    constructor() {  
        this.root = new TrieNode();  
    }  

    // Inserts a word into the Trie  
    insertWord(word) {  
        let node = this.root;  
        for (let i = 0; i < word.length; i++) {  
            if (!node.containsChar(word[i])) {  
                node.addChar(word[i], new TrieNode());  
            }  
            node = node.getNode(word[i]);  
        }  
        node.markAsEnd();  
    }  

    // Checks if all prefixes of a word exist in the Trie  
    hasAllPrefixes(word) {  
        let node = this.root;  
        let isValid = true;  

        for (let i = 0; i < word.length; i++) {  
            if (node.containsChar(word[i])) {  
                node = node.getNode(word[i]);  
                isValid = isValid && node.isEndOfWord();  
            }  
        }  
        return isValid;  
    }  
}  

class Solution {  
    // Function to find the longest valid word in the array  
    longestString(words, wordCount) {  
        let trie = new Trie();  

        // Insert all words into the Trie  
        for (let i = 0; i < wordCount; i++) {  
            trie.insertWord(words[i]);  
        }  

        let longestWord = "";  

        // Check for the longest word that satisfies the prefix condition  
        for (let i = 0; i < wordCount; i++) {  
            if (trie.hasAllPrefixes(words[i])) {  
                if (words[i].length > longestWord.length) {  
                    longestWord = words[i];  
                } else if (words[i].length === longestWord.length && words[i] < longestWord) {  
                    longestWord = words[i];  
                }  
            }  
        }  

        return longestWord;  
    }  
}  
