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
        let s = readLine();

        let obj = new Solution();
        let res = obj.bracketNumbers(s);
        printList(res, res.length);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} s
 * @returns {number[]}
 */

class Solution {
    // Function to return bracket numbers for the input string
    bracketNumbers(str) {
        let length = str.length;
        let frequencystack = [];
        let ans = [];
        let cnt = 0;

        // Iterate through the string
        for (let i = 0; i < length; i++) {
            // When encountering an opening bracket '('
            if (str[i] === '(') {
                cnt++;
                ans.push(cnt);  // Store the current count
                frequencystack.push(cnt);  // Push the count to the stack
            }
            // When encountering a closing bracket ')'
            else if (str[i] === ')') {
                ans.push(frequencystack.pop());  // Pop the last count from the stack and store it
            }
        }

        // Return the list of bracket numbers
        return ans;
    }
}
