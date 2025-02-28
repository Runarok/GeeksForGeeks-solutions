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
        let str = readLine().trim();
        let obj = new Solution();
        let res = obj.flipped_indexes(str);
        let s = '';
        for (let it of res) {
            s += it + " ";
        }
        console.log(s);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {string} s - The input string representing a sequence of characters.
 * @returns {number[]} - An array of indexes where the character 'T' was flipped.
 */

class Solution {
    // Function to find flipped indexes where 'T' is flipped to 'H' and vice versa.
    flipped_indexes(s) {
        // Convert the string to an array of characters for easier manipulation
        const s_arr = Array.from(s);
        
        // Array to store the flipped indexes
        const solution_set = [];
        
        // Iterate through the string until the second last character
        for (let i = 0; i < s_arr.length - 1; i++) {
            // If the current character is 'T', flip it and the next character
            if (s_arr[i] === 'T') {
                // Add the index (1-based) to the solution set
                solution_set.push(i + 1);
                
                // Flip the current character 'T' to 'H'
                s_arr[i] = 'H';
                
                // Flip the next character: if it's 'H' it becomes 'T', and vice versa
                s_arr[i + 1] = s_arr[i + 1] === 'H' ? 'T' : 'H';
            }
        }

        // Check if the last character is 'T' and flip it, adding its index to the solution set
        if (s_arr[s_arr.length - 1] === 'T') solution_set.push(s_arr.length);
        
        // Return the array of flipped indexes
        return solution_set;
    }
}
