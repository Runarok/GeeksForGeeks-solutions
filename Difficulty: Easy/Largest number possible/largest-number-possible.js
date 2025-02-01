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
        let n = parseInt(readLine());
        let s = parseInt(readLine());
        let obj = new Solution();
        let res = obj.findLargest(n, s);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n - Number of digits in the desired number
 * @param {number} s - Sum of digits to be achieved
 * @returns {string} - Largest number that can be formed with n digits and sum s
 */

class Solution {
    findLargest(n, s) {
        // Initialize an empty string to store the resulting number
        let num = "";

        // Special case when we need to form a 1-digit number
        if(n == 1) {
            // If sum is 0, return 0
            if(s == 0) return "0";
            // If sum is greater than 9, it's impossible to form a 1-digit number
            else if(s > 9) return "-1";
            else return s.toString(); // Return the sum itself if it's a valid 1-digit number
        }

        // Special case when sum is 0 and n > 1, which is impossible
        if(s == 0 && n > 1) return "-1";

        // Build the number digit by digit
        while(n--) {
            if(s > 9) {
                // If sum is greater than 9, use 9 as the digit and subtract 9 from sum
                num = num + "9";
                s -= 9;
            }
            else if(s > 0 && s <= 9) {
                // If the remaining sum is between 1 and 9, use it as the digit
                num = num + s;
                s = 0; // Set sum to 0 as we've used it up
            }
            else {
                // If sum is 0, append 0 to the number
                num = num + "0";
            }
        }

        // If sum is still not zero, it's impossible to form the number
        if(s != 0) return "-1";

        return num; // Return the resulting largest number
    }
}
