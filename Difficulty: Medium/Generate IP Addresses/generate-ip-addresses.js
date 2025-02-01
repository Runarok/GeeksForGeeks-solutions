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

function printArray(res, n) {
    for (let i = 0; i < n; i++) {
        console.log(res[i]);
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let s = readLine();
        let obj = new Solution();
        let res = obj.generateIp(s);
        res.sort();
        if (res.length === 0) {
            console.log(-1);
        } else {
            printArray(res, res.length);
        }

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @returns {string[]}
 */

class Solution {
    generateIp(s) {
        let result = [];
        
        // If the string length is less than 4 or more than 12, return an empty array.
        if (s.length < 4 || s.length > 12) return result;
        
        // Function to check if a segment is valid
        function isValid(segment) {
            // It should be between 0 and 255 and have no leading zeros unless it is exactly "0"
            if (segment.length > 1 && segment[0] === '0') return false;
            let num = parseInt(segment);
            return num >= 0 && num <= 255;
        }
        
        // Backtracking function to explore all valid splits
        function backtrack(start, current) {
            // If we have 4 segments and we have used up all characters in the string
            if (current.length === 4 && start === s.length) {
                result.push(current.join('.'));
                return;
            }
            
            // Try to create segments with 1, 2, or 3 digits
            for (let length = 1; length <= 3; length++) {
                let segment = s.substring(start, start + length);
                if (segment.length > 0 && isValid(segment)) {
                    current.push(segment);
                    backtrack(start + length, current); // move to the next part of the string
                    current.pop(); // backtrack
                }
            }
        }
        
        backtrack(0, []);
        return result;
    }
}
