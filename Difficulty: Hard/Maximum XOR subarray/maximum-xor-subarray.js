//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    if(arr[i] == -0)
      arr[i] = 0;
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input = readLine().split(" ").map((x)=>parseInt(x));
    for(let j = 0;j<n;j++) arr[j] = input[j];   
    let obj = new Solution();
    let res = obj.maxSubarrayXOR(arr,n);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
    maxSubarrayXOR(arr, n) {
        // Trie node structure
        class TrieNode {
            constructor() {
                this.child = [null, null];  // child[0] for bit 0, child[1] for bit 1
            }
        }

        // Function to insert the number into the Trie
        const insert = (root, num) => {
            let node = root;
            for (let i = 31; i >= 0; i--) {
                let bit = (num >> i) & 1;
                if (!node.child[bit]) {
                    node.child[bit] = new TrieNode();
                }
                node = node.child[bit];
            }
        };

        // Function to find the maximum XOR of num with elements in the Trie
        const findMaxXOR = (root, num) => {
            let node = root;
            let maxXor = 0;
            for (let i = 31; i >= 0; i--) {
                let bit = (num >> i) & 1;
                let oppositeBit = bit ^ 1;
                if (node.child[oppositeBit]) {
                    maxXor |= (1 << i);
                    node = node.child[oppositeBit];
                } else {
                    node = node.child[bit];
                }
            }
            return maxXor;
        };

        // Initialize Trie root and other variables
        let root = new TrieNode();
        insert(root, 0);  // Insert 0 initially to handle the case when prefixXor itself is the maximum
        let maxXor = -Infinity;
        let prefixXor = 0;

        // Traverse through the array
        for (let i = 0; i < n; i++) {
            // Update the current prefix XOR
            prefixXor ^= arr[i];
            
            // Find the maximum XOR with the current prefix XOR
            maxXor = Math.max(maxXor, findMaxXOR(root, prefixXor));
            
            // Insert the current prefix XOR into the Trie
            insert(root, prefixXor);
        }
        
        return maxXor;
    }
}
