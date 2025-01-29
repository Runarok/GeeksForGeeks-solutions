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

    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine()); // Number of test cases
    for (let i = 0; i < t; i++) {
        // Read dimensions of the board
        let dimensions = readLine().split(' ').map(x => parseInt(x, 10));
        let N = dimensions[0]; // Number of rows
        let M = dimensions[1]; // Number of columns

        // Read the board
        let board = [];
        for (let j = 0; j < N; j++) {
            let row = readLine().split(' ');
            board.push(row);
        }

        // Read the words to search
        let words = readLine().split(' ');

        // Create an instance of Solution and call the function to find words
        let obj = new Solution();
        let res = obj.findWords(
            board, words); // Assuming findWords is the function to search for words
        if (res.length === 0) { // Check if the array 'ans' is empty
            console.log("[]");  // Print empty array representation
            console.log("~");   // Print tilde symbol
            continue;           // Continue to the next iteration of the loop
        }
        res.sort();
        printArray(res, res.length); // Print the results

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Helper function to perform DFS search for the target word
    helper(board, x, y, ind, target, visited) {
        const m = board.length;
        const n = board[0].length;

        // Check if current position is out of bounds or already visited
        // Also ensure that the character at (x, y) matches the target[ind]
        if (x < 0 || x >= m || y < 0 || y >= n || !!visited[x][y] || board[x][y] != target[ind]) 
            return false;
        
        // If all characters in target are matched, return true
        if (ind == target.length - 1) 
            return true;

        // Mark the current cell as visited
        visited[x][y] = true;

        // Possible directions to move: Right, Left, Down, Up
        const directions = [
            [0, 1],  // Right
            [0, -1], // Left
            [1, 0],  // Down
            [-1, 0]  // Up
        ];

        // Generate valid next positions and recursively search
        const ans = directions
            .map(c => [x + c[0], y + c[1]]) // Calculate new positions
            .filter(c => 
                c[0] >= 0 && c[0] < m && c[1] >= 0 && c[1] < n && !visited[c[0]][c[1]]
            ) // Ensure positions are within bounds and not visited
            .some(c => this.helper(board, c[0], c[1], ind + 1, target, visited)); // DFS search

        // Unmark the cell (backtrack) before returning
        visited[x][y] = false;

        return ans;
    }

    // Function to find words from the dictionary that exist in the board
    findWords(board, words) {
        const m = board.length;
        const n = board[0].length;

        // Create a lookup table of character positions in the board
        const coords = board.reduce((acc1, row, i) => 
            row.reduce((acc2, char, j) => {
                acc2[char] = [...(acc2[char] || []), { i, j }];
                return acc2;
            }, acc1), {}
        );

        // Remove duplicate words from the given word list
        const uniqueWords = Object.keys(words.reduce((acc, word) => {
            acc[word] = word;
            return acc;
        }, {}));

        // Check for each word in the board
        return uniqueWords.filter(word => {
            const visited = Array.from({ length: m }, () => ({})); // Create a visited array
            return (coords[word[0]] || []).some(v => 
                this.helper(board, v.i, v.j, 0, word, visited)
            ); // Start DFS search from all possible positions of the first character
        });
    }
}
