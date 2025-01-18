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
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let input1 = readLine().split(" ");
    let dict = new Array(n);
    for(let j = 0;j<n;j++) dict[j] = input1[j];
    let input2 = readLine().split(" ").map((x) => parseInt(x));
    let R = input2[0];
    let C = input2[1];
    let board = [];
    for(let j = 0;j<R;j++){
      let input3 = readLine().split(" ");
      let row = new Array(C);
      for(let k = 0;k<C;k++){
        row[k] = input3[k];
      }
      board.push(row);
    }
    let obj = new Solution();
    let res = obj.wordBoggle(board,dict);
    
    if(res && res.length) {
        printArray(res,res.length);
    } else {
        console.log(-1);
    }
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string[][]} board
 * @param {string[]} dictionary
 * @return {string[]}
 */

class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class Solution {
    constructor() {
        this.result = [];
        this.trieRoot = new TrieNode();
    }

    // Build the Trie from the dictionary
    buildTrie(dictionary) {
        for (let word of dictionary) {
            let node = this.trieRoot;
            for (let char of word) {
                if (!(char in node.children)) {
                    node.children[char] = new TrieNode();
                }
                node = node.children[char];
            }
            node.isWord = true;
        }
    }

    // DFS function to explore the board and find words
    dfs(board, row, col, node, word, visited) {
        // If out of bounds or already visited, return
        if (row < 0 || col < 0 || row >= board.length || col >= board[0].length || visited[row][col]) {
            return;
        }

        let char = board[row][col];
        if (!(char in node.children)) {
            return;
        }

        // Mark the current cell as visited
        visited[row][col] = true;
        node = node.children[char];
        word += char;

        // If it's a valid word, add to the result
        if (node.isWord) {
            this.result.push(word);
            node.isWord = false; // Avoid duplicate words
        }

        // Explore all 8 possible directions
        const directions = [
            [-1, 0], [1, 0], [0, -1], [0, 1], // vertical and horizontal
            [-1, -1], [-1, 1], [1, -1], [1, 1] // diagonals
        ];

        for (let [dr, dc] of directions) {
            this.dfs(board, row + dr, col + dc, node, word, visited);
        }

        // Unmark the current cell as visited
        visited[row][col] = false;
    }

    // Main function to find all words
    wordBoggle(board, dictionary) {
        this.buildTrie(dictionary);

        const rows = board.length;
        const cols = board[0].length;
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

        // Start DFS from each cell
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                this.dfs(board, i, j, this.trieRoot, "", visited);
            }
        }

        // Sort the result lexicographically and return
        return this.result.sort();
    }
}

