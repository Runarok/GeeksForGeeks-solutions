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

class TrieNode{
    constructor(){ 
        this.children = new Array(26);
        this.children.fill(null);
        // isEndOfWord is True if node represent the end of the word 
        this.isEndOfWord = false
    }
}  
class Trie{
      
    // Trie data structure class 
    constructor(){ 
        this.root =new TrieNode()
    }
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let keys = new Array(n);
        for(let i=0;i<n;i++)
            keys[i] = input_line[i];
        
        let obj = new Solution();
        let t = new Trie();
        for(let i=0;i<n;i++)
        {
            obj.insert(t.root,keys[i]);
        }
        input_line = readLine().split(' ');
        let abc = input_line[0];
        
        let ans = obj.search(t.root, abc);
        if(ans)
            ans=1;
        else
            ans=0;
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript



/**
 * 
 * insert 
 * @param {TrieNode} root (root of trie tree)
 * @param {string} key (key to be inserted)
 * 
 * search
 * @param {TrieNode} root (root of trie tree)
 * @param {string} key (key to be searched)
 * @returns {boolean}  (true if key presents in trie, else false)
*/

class Solution {
    // Function to insert string into TRIE.
    insert(root, key) {
        let node = root;
        
        for (let ch of key) {
            let index = ch.charCodeAt(0) - 'a'.charCodeAt(0); // Get index for the character
            
            if (!node.children[index]) {
                node.children[index] = new TrieNode(); // Create new TrieNode if it doesn't exist
            }
            
            node = node.children[index]; // Move to the child node
        }
        
        node.isEndOfWord = true; // Mark the end of word
    }
    
    // Function to use TRIE data structure and search the given string.
    search(root, key) {
        let node = root;
        
        for (let ch of key) {
            let index = ch.charCodeAt(0) - 'a'.charCodeAt(0); // Get index for the character
            
            if (!node.children[index]) {
                return false; // Character not found, return false
            }
            
            node = node.children[index]; // Move to the child node
        }
        
        return node.isEndOfWord; // Return true if it is the end of a word
    }
}
