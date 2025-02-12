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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let dict = new Array(n);
        for(let i=0;i<n;i++){
            dict[i] = input_line[i];
        }
        
        input_line = readLine().split(' ');
        let pattern = input_line[0];
        
        let obj = new Solution();
        obj.findAllWords(dict, pattern);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string[]} dict
 * @param {string} pattern
 */
class Solution {
    // Function to print all words in the CamelCase dictionary 
    // that match with a given pattern.
    findAllWords(dict, pattern) {
        // 1. Build the trie tree from the dictionary
        const root = new TrieNode();
        for (let i in dict) {
            const word = dict[i];
            let currentNode = root;

            // Insert each word into the trie based on its uppercase letters
            for (let j = 0; j < word.length; j++) {
                if (word.charCodeAt(j) >= 'A'.charCodeAt(0) && word.charCodeAt(j) <= 'Z'.charCodeAt(0)) {
                    let index = word.charCodeAt(j) - 'A'.charCodeAt(0);

                    if (currentNode.children[index] == null) {
                        currentNode.children[index] = new TrieNode();
                    }
                    currentNode = currentNode.children[index];
                }
            }
            // Add the word to the node and sort
            currentNode.words.push(word);
            currentNode.words.sort();
        }

        // 2. Navigate through the trie using the pattern
        let currentNode = root;
        let found = true;
        
        // Traverse the trie based on the pattern's characters
        for (let j = 0; j < pattern.length; j++) {
            let index = pattern.charCodeAt(j) - 'A'.charCodeAt(0);
            
            // If the character does not exist in the trie, stop and set found to false
            if (currentNode.children[index] == null) {
                found = false;
                break;
            }
            currentNode = currentNode.children[index];
        }

        // Read words from the trie
        const words = currentNode.read();
        
        // If no matching words were found, print "No match found"
        if (!found || words.length == 0) {
            console.log('No match found');
        } else {
            // Otherwise, print the matching words
            console.log(words.join(' '));
        }
    }
}

// TrieNode class to represent each node in the trie
class TrieNode {
    constructor() {
        this.children = []; // Array to store children nodes
        this.words = []; // Array to store words at the node
    }

    // Method to read all words from the current node and its descendants
    read() {
        let wordsList = [];
        
        // Add words at the current node
        for (let i = 0; i < this.words.length; i++) {
            wordsList.push(this.words[i]);
        }

        // Recursively add words from child nodes
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i] != null) {
                let childWords = this.children[i].read();
                for (let i = 0; i < childWords.length; i++) {
                    wordsList.push(childWords[i]);
                }
            }
        }
        
        return wordsList;
    }
}
