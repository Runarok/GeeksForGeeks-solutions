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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let N = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.towerOfHanoi(N, 1, 3, 2));
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} n - Number of disks.
 * @param {number} from - The peg from which disks need to be moved.
 * @param {number} to - The target peg to which disks need to be moved.
 * @param {number} aux - The auxiliary peg used during the process.
 * @returns {number} - The minimum number of moves required to solve the Tower of Hanoi puzzle.
 */
class Solution {

    // Function to initiate the Tower of Hanoi solving process and calculate the minimum number of moves.
    towerOfHanoi(n, from, to, aux) {
        if (n === 0) {
            return 0; // If there are no disks, no moves are required.
        }
        let count = { ans: 0 }; // Initialize the move counter object to keep track of the number of moves.
        this.recur(n, from, to, aux, count); // Call the recursive helper function to solve the puzzle.
        return count.ans; // Return the total number of moves required.
    }
    
    // Helper function to recursively solve the Tower of Hanoi problem.
    recur(n, from, to, aux, count) {
        if (n === 1) {
            count.ans++; // Base case: move a single disk from 'from' peg to 'to' peg.
            return;
        }

        // Move the top n-1 disks from 'from' peg to 'aux' peg using 'to' peg as auxiliary.
        this.recur(n - 1, from, aux, to, count);
        
        count.ans++; // Move the nth disk from 'from' peg to 'to' peg.

        // Move the n-1 disks from 'aux' peg to 'to' peg using 'from' peg as auxiliary.
        this.recur(n - 1, aux, from, to, count);
    }
}
