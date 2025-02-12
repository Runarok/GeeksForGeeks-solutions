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

/* Function to print an array */
function printArray(arr, size) {
    let s = arr.join(" ");
    console.log(s);
}

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine()); // Number of test cases
    for (let _ = 0; _ < t; _++) {
        let n = parseInt(readLine());          // Number of operations
        let functions = readLine().split(' '); // Function calls
        let words = [ "init" ].concat(readLine().split(' '));

        let res = [];
        let wordDictionary = null; // Initialize WordDictionary to null

        for (let i = 0; i < n; i++) {
            const fn = functions[i];
            const word = words[i];

            if (fn === "WordDictionary") {
                wordDictionary = new WordDictionary();
                res.push("null");
            } else if (fn === "addWord" && wordDictionary) {
                wordDictionary.addWord(word);
                res.push("null");
            } else if (fn === "search" && wordDictionary) {
                res.push(wordDictionary.search(word) ? "true" : "false");
            }
        }

        printArray(res, res.length); // Print results for the test case
        console.log("~");            // Output the delimiter after each test case
    }
}

// } Driver Code Ends

class TrieNode {
    constructor() {
        this.children = {}; // Initialize children as an empty object
        this.isEndOfWord = false; // Flag to indicate if the current node marks the end of a word
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode(); // Root node of the Trie
    }

    // Method to add a word to the dictionary
    addWord(word) {
        let currNode = this.root;
        for (let c of word) {
            // If the character does not exist in the children, create a new TrieNode
            if (!currNode.children[c]) currNode.children[c] = new TrieNode();
            currNode = currNode.children[c]; // Move to the child node
        }
        currNode.isEndOfWord = true; // Mark the end of the word
    }

    // Method to search for a word in the dictionary
    search(word) {
        return this.searchInNode(word, this.root);
    }
    
    // Helper function for searching within a node
    searchInNode(word, node) {
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (char === '.') {
                // If the character is a wildcard '.', check all possible children
                for (let child in node.children) {
                    // Recursively search the next part of the word in each child node
                    if (this.searchInNode(word.slice(i + 1), node.children[child])) return true;
                }
                return false; // Return false if no match is found
            } else {
                // If the character exists in the current node's children, continue the search
                if (!node.children[char]) return false;
                node = node.children[char];
            }
        }
        // Return true if the word ends at the current node
        return node.isEndOfWord;
    }
}
