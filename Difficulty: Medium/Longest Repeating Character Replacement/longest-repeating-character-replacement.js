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
        let S = readLine();
        let K = parseInt(readLine());
        let obj = new Solution();
        let res = obj.characterReplacement(S, K);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {string} S
 * @param {number} K
 * @returns {number}
 */

class Solution {
    characterReplacement(s, k) {
        // Initialize variables
        let n = s.length;
        let left = 0;
        let right = 0;
        let maxLength = 0;
        let count = new Array(26).fill(0);

        // Iterate through the string
        for (let i = 0; i < n; i++) {
            // Update the count of the current character
            count[s.charCodeAt(i) - 65]++;
            
            // Check if the window size minus the count of the most frequent character is less than or equal to k
            if ((right - left + 1) - Math.max(...count) <= k) {
                maxLength = Math.max(maxLength, right - left + 1);
            } else {
                // Shrink the window from the left if the condition is not met
                while ((right - left + 1) - Math.max(...count) > k) {
                    count[s.charCodeAt(left) - 65]--;
                    left++;
                }
                maxLength = Math.max(maxLength, right - left + 1);
            }
            right++;
        }

        return maxLength;
    }
}
