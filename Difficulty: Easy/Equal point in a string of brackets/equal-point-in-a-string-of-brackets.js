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
        // let inputLine = readLine().split(' ');
        // let n = parseInt(inputLine[0]);
        // let m = parseInt(inputLine[1]);
        let s = readLine();
        let obj = new Solution();
        console.log(obj.findIndex(s));

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

class Solution {
    // Function to find the index where the string can be split into two balanced parts
    findIndex(str) {
        let n = str.length;
        let totalCloseBrackets = 0;

        // Count total number of closing brackets in the string
        for (let ch of str) {
            if (ch === ')') {
                totalCloseBrackets++;
            }
        }

        let openBracketsCount = 0;     // Count of opening brackets processed so far
        let remainingCloseBrackets = totalCloseBrackets;  // Remaining closing brackets

        // Traverse the string to find the split point
        for (let i = 0; i <= n; i++) {
            // If count of open brackets equals count of close brackets to the right, return index
            if (openBracketsCount === remainingCloseBrackets) {
                return i;
            }

            // Update counts based on the current character
            if (str[i] === ')') {
                remainingCloseBrackets--;
            } else if (str[i] === '(') {
                openBracketsCount++;
            }
        }

        // If no valid split index found, return -1
        return -1;
    }
}
