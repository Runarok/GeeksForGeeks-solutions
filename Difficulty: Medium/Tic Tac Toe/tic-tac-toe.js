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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = new Array(9);
        let input_ar1 = readLine().split(' ');
        for (let i = 0; i < 9; i++) {
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.isValid(arr);
        if (res === true) {
            console.log('Valid');
        } else {
            console.log('Invalid')
        }
    
console.log("~");
}
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {char[]} board
 * @returns {bool}
 */

// X O O 
// X X O 
// X O X

class Solution {
    isValid(board) {
        // Flatten the board to make it easier to work with
        const flatBoard = board.flat();

        // Helper function to check if a player (X or O) has won
        function isCWin(board, c) {
            // Define all possible winning conditions (rows, columns, diagonals)
            const winConditions = [
                [0, 1, 2], // Top row
                [3, 4, 5], // Middle row
                [6, 7, 8], // Bottom row
                [0, 3, 6], // Left column
                [1, 4, 7], // Middle column
                [2, 5, 8], // Right column
                [0, 4, 8], // Main diagonal
                [2, 4, 6]  // Anti-diagonal
            ];
            let count = 0;
            // Check all winning conditions for the given player `c`
            for (let condition of winConditions) {
                if (
                    board[condition[0]] === c &&
                    board[condition[1]] === c &&
                    board[condition[2]] === c
                ) {
                    count++; // Increment if there's a winning combination
                }
            }
            return count; // Return the number of winning combinations found
        }

        // Count the occurrences of 'X' and 'O' on the board
        let countX = 0;
        let countO = 0;
        for (let cell of flatBoard) {
            if (cell === 'X') {
                countX++;
            } else if (cell === 'O') {
                countO++;
            }
        }

        // Check if the count of X and O is valid: X can only be one more than O
        if (countX < countO || countX > countO + 1) {
            return false; // Invalid counts
        }
        
        // Check for wins
        const xWins = isCWin(flatBoard, 'X');
        const oWins = isCWin(flatBoard, 'O');
        
        // Both players can't win at the same time
        if (xWins !== 0 && oWins !== 0) {
            return false;
        }
        
        // A player can only win once
        if (xWins > 1 || oWins > 1) {
            return false;
        }
        
        return true; // Return true if the board is valid
    }
}
