//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;

    for (; i < t; i++) {
        let A = readLine().trim();
        let obj = new Solution();
        let res = obj.FirstNonRepeating(A);
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

class Solution {
    FirstNonRepeating(s) {
        // Create a map to store the frequency of characters
        let freq = new Map();
        // Create a queue to store the characters in order
        let q = [];
        let result = [];
        
        // Iterate through each character in the string
        for (let ch of s) {
            // Increase the frequency of the character
            freq.set(ch, (freq.get(ch) || 0) + 1);
            // Add the character to the queue
            q.push(ch);
            
            // Remove characters from the front of the queue if their frequency is greater than 1
            while (q.length > 0 && freq.get(q[0]) > 1) {
                q.shift();
            }
            
            // If the queue is not empty, the first element is the non-repeating character
            // Otherwise, append '#' to the result
            result.push(q.length > 0 ? q[0] : '#');
        }
        
        // Join the result array into a string and return
        return result.join('');
    }
}
