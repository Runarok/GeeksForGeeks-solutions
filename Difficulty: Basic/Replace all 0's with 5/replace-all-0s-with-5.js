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
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);

        let obj = new Solution();

        let ans = obj.convertFive(n);
        console.log(ans);

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} num
 * @returns {number}
 */
class Solution {
    convertFive(num) {
        // Convert number to string, replace all '0' with '5', and parse it back to integer
        return parseInt(num.toString().replace(/0/g, '5'));
    }
}
