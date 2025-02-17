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
        let input_line = readLine().split(' ');
        let str = input_line[0];
        let obj = new Solution();
        let ans = obj.findSum(str);
        console.log(ans);

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} str
 * @returns {number}
 */

class Solution {
    // Function to calculate sum of all numbers present in a string.
    findSum(s) {
        // Extract all numbers using regex and match them as an array of strings
        const numbers = s.match(/\d+/g) || [];
        
        // Sum all the numbers by converting each to integer
        return numbers.reduce((sum, num) => sum + parseInt(num, 10), 0);
    }
}
