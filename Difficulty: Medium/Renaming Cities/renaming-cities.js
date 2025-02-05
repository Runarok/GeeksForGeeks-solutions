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
        
        let arr = new Array(n);
        for(let i=0;i<n;i++){
            input_line = readLine().split(' ');
            arr[i] = input_line[0];
        }
        
        let obj = new Solution();
        obj.check(arr, n);
    
console.log("~");
}
}
// } Driver Code Ends

class Node {
    constructor() {
        this.count1 = 0; // Count of occurrences of this node in the trie
        this.isEndOfWord = false; // Whether the current node is the end of a valid word
        this.mp = new Map(); // Map to store child nodes
    }
}

let INT_MAX = 1e9;

/**
 * @param {string[]} arr
 * @param {number} n
*/
class Solution {
    // Function to insert a string into the Trie
    insertInTrie(root, s) {
        // Iterate over each character of the string and insert it into the Trie
        for (let i = 0; i <= s.length - 1; i++) {
            if (!root.mp.has(s[i])) {
                // If the character is not present in the current node, add it
                root.mp.set(s[i], new Node());
            }
    
            // Move to the next level of the Trie
            root = root.mp.get(s[i]);
        }
        // Mark the last node as the end of a word
        root.isEndOfWord = true;
    }
    
    // Function to search for the string in the Trie and return the index
    // up to which the string is uniquely identified in the Trie
    searchInTrie(root, s) {
        let i;
        // Traverse the Trie node by node for each character in the string
        for (i = 0; i < s.length - 1; i++) {
            if (!root.mp.has(s[i])) {
                // If the character is not found, return the index of failure
                return i;
            }
            root = root.mp.get(s[i]);
        }
        
        // If we reach the end of the string but it's not marked as the end of a word, return the index
        if (root.isEndOfWord == false)
            return i;
        
        return INT_MAX; // The string is already in the Trie (fully identified)
    }
    
    // Function to check strings and their uniqueness in the Trie
    check(arr, n) {
        let mp = new Map(); // Map to track the count of occurrences of each string
        let root = new Node(); // Create the root node for the Trie
        
        // Iterate over all strings in the input array
        for (let i = 0; i < n; i++) {
            // Search the string in the Trie
            let k = this.searchInTrie(root, arr[i]);
            let s = arr[i];
            
            // If the string is already fully identified in the Trie
            if (k == INT_MAX) { 
                // Increment the count for this string in the map
                if (mp.has(s)) 
                    mp.set(s, 1 + mp.get(s));
                else
                    mp.set(s, 0);
                
                // If the string appears more than once, print it with the count
                if (mp.get(s) > 1)
                    console.log(s + " " + mp.get(s));
                else
                    console.log(s);
            } else {
                let ans = "";
                // Print the prefix of the string up to the point where it can be uniquely identified
                for (let j = 0; j <= k; j++) {
                    ans += s[j];
                }
                // Insert the string into the Trie
                this.insertInTrie(root, s);
                // Update the count of the string
                if (mp.has(s)) 
                    mp.set(s, 1 + mp.get(s));
                else
                    mp.set(s, 1);
                
                // Print the prefix with the count if it appears more than once
                if (mp.has(s) && mp.get(s) > 1)
                    ans += " " + mp.get(s);
                console.log(ans);
            }
        }
    }
}
