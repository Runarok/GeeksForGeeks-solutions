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
        let arr = new Array(n);
        for(let i=0;i<n;i++){
            arr[i] = parseInt(input_line[i]);
        }
        
        let obj = new Solution();
        let ans = obj.maxSubarrayXOR(arr, n);
        if(ans==-0)
            ans=0;
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
*/

class TrieNode {
    constructor() {
        this.children = new Array(2).fill(null);  // Each node has two children (0 or 1)
    }
}

class Solution {
    // Function to insert a number into the Trie
    insert(root, num) {
        let node = root;
        for (let i = 31; i >= 0; i--) {
            let bit = (num >> i) & 1;  // Get the i-th bit of num
            if (node.children[bit] === null) {
                node.children[bit] = new TrieNode();
            }
            node = node.children[bit];
        }
    }

    // Function to find the maximum XOR with a given number in the Trie
    findMaxXOR(root, num) {
        let node = root;
        let maxXor = 0;
        for (let i = 31; i >= 0; i--) {
            let bit = (num >> i) & 1;
            let oppositeBit = 1 - bit;
            if (node.children[oppositeBit] !== null) {
                maxXor |= (1 << i);
                node = node.children[oppositeBit];
            } else {
                node = node.children[bit];
            }
        }
        return maxXor;
    }

    // Function to return the maximum XOR value
    maxSubarrayXOR(arr, n) {
        let root = new TrieNode();
        let prefixXor = 0;
        let maxXor = 0;

        // Insert 0 to handle the case when a prefix itself is the max XOR
        this.insert(root, 0);

        for (let i = 0; i < n; i++) {
            prefixXor ^= arr[i];  // Compute prefix XOR
            // Find the max XOR for this prefixXor using the Trie
            maxXor = Math.max(maxXor, this.findMaxXOR(root, prefixXor));
            // Insert the current prefix XOR into the Trie
            this.insert(root, prefixXor);
        }

        return maxXor;
    }
}
