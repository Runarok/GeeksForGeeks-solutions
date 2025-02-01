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
        this.isEndOfWord = false;
    }
}  
class Trie{
      
    // Trie data structure class 
    constructor(){ 
        this.root =new TrieNode();
    }

    CHAR_TO_INDEX(s,idx)
    {
        return s.charCodeAt(idx)-97;
    }
    
    insert(root, key) {
       let level;
       let length = key.length;
       let index;
       
       let pCrawl = root;
       for (level = 0; level < length; level++) {
           index = this.CHAR_TO_INDEX(key,level);
           if (pCrawl.children[index]===null) 
           pCrawl.children[index] = new TrieNode();
           pCrawl = pCrawl.children[index];
       }

        // mark last node as end of word
        pCrawl.isEndOfWord = true;
        
    }
    search(root, key) {
        let level;
        let length = key.length;
        let index;
        let pCrawl = root;
    
        for (level = 0; level < length; level++) {
            index = this.CHAR_TO_INDEX(key,level);
            if (pCrawl.children[index]===null) return false;
    
            pCrawl = pCrawl.children[index];
        }
    
        return (pCrawl !== null && pCrawl.isEndOfWord);
    }
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        
        let n = parseInt(readLine());
        
        let input_line = readLine().split(' ');
        let keys = new Array(n);
        for(let i=0;i<n;i++)
            keys[i] = input_line[i];

        let abc = readLine();
        
        let obj = new Solution();
        let t = new Trie();
        for(let i=0;i<n;i++)
        {
            t.insert(t.root,keys[i]);
        }
        
        
        obj.deleteKey(t.root, abc);
        let ans;
        if(t.search(t.root,abc))
            ans=0;
        else
            ans=1;
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends

/*
class TrieNode {
    constructor() { 
        this.children = new Array(26);
        this.children.fill(null);
        // isEndOfWord is True if node represents the end of a word 
        this.isEndOfWord = false;
    }
}
*/

class Solution {
    // Main function to delete key from the trie
    deleteKey(root, key) {
        this.deleteNode(root, key, 0);
    }
    
    // Helper function to recursively delete nodes in the trie
    deleteNode(node, key, depth) {
        // Base case: if the node is null, return null
        if (!node) return null;
        
        // If we've reached the end of the key
        if (depth === key.length) {
            // Unmark the end of word flag
            if (node.isEndOfWord) node.isEndOfWord = false;
            
            // If node has no children, we can delete it
            if (this.isEmpty(node)) return null;
            
            // Otherwise, return the node as it is still in use
            return node;
        }
        
        // Calculate index for the current character in the key
        const index = key.charCodeAt(depth) - 'a'.charCodeAt(0);
        
        // Recursively call deleteNode on the appropriate child
        node.children[index] = this.deleteNode(node.children[index], key, depth + 1);
        
        // If current node is empty and not the end of a word, delete it
        if (this.isEmpty(node) && !node.isEndOfWord) return null; 
        
        // Otherwise, return the node (it's still part of the trie)
        return node;
    }
    
    // Helper function to check if a node has any children
    isEmpty(node) {
        for (let i = 0; i < 26; i++) {
            if (node.children[i]) return false;  // If any child exists, return false
        }
        return true;  // If no children exist, return true
    }
}
