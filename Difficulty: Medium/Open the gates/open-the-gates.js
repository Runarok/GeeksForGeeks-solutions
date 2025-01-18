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
    let dictionary = new Array(n);
    let input = readLine().split(" ");
    for(let j = 0;j<n;j++) dictionary[j] = input[j];
    let input2 = readLine().split(" ").map((x)=>parseInt(x));
    let R = input2[0];
    let C = input2[1];
    let board = [];
    for(let j = 0;j<R;j++){
      let row = readLine().split(" ");
      board.push(row);
    }

    let obj = new Solution();
    let res = obj.wordBoggle(board,dictionary);
    if(res.length===0){
      console.log("-1");
    }
    else{
      res.sort();
      printArray(res,res.length);
    }
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string[][]} board
 * @param {string[]} dictionary
 * @return {string[]}
 */

class Solution {
    // Function to find all gate names present in the board.
    wordBoggle(board, dictionary) {
        // Initialize variables.
        const rows = board.length;
        const cols = board[0].length;
        const result = new Set(); // Use a Set to store unique gate names.
        const directions = [
            [-1, 0], [1, 0], [0, -1], [0, 1], // Up, Down, Left, Right
            [-1, -1], [-1, 1], [1, -1], [1, 1] // Diagonal directions
        ];

        // Helper function to perform DFS and search for a word.
        const dfs = (i, j, node, visited, path) => {
            // Base case: if the current node marks the end of a word.
            if (node.isEnd) {
                result.add(path); // Add the word to the result set.
            }

            // Mark the current cell as visited.
            visited[i][j] = true;

            // Explore all 8 possible directions.
            for (const [dx, dy] of directions) {
                const x = i + dx;
                const y = j + dy;

                // Check boundaries and if the cell is unvisited.
                if (x >= 0 && x < rows && y >= 0 && y < cols && !visited[x][y]) {
                    const char = board[x][y];
                    if (node.children[char]) {
                        dfs(x, y, node.children[char], visited, path + char);
                    }
                }
            }

            // Backtrack: Unmark the cell as visited.
            visited[i][j] = false;
        };

        // Create a Trie for the dictionary.
        class TrieNode {
            constructor() {
                this.children = {};
                this.isEnd = false;
            }
        }

        const buildTrie = (dictionary) => {
            const root = new TrieNode();
            for (const word of dictionary) {
                let node = root;
                for (const char of word) {
                    if (!node.children[char]) {
                        node.children[char] = new TrieNode();
                    }
                    node = node.children[char];
                }
                node.isEnd = true;
            }
            return root;
        };

        const trieRoot = buildTrie(dictionary);

        // Perform DFS for each cell in the board.
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const char = board[i][j];
                if (trieRoot.children[char]) {
                    dfs(i, j, trieRoot.children[char], visited, char);
                }
            }
        }

        // Return the results as an array.
        return Array.from(result);
    }
}
