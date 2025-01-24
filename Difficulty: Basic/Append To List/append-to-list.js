//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;



process.stdin.on("data", (input) => {
    inputString += input;
});

process.stdin.on("end", () => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function printList(res, n) {
    let s = '';
    for (let i = 0; i < n; i++) {
        s += res[i] + " ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let a = parseInt(readLine());
        let b = parseInt(readLine());
        let c = parseInt(readLine());
        let obj = new Solution();
        let res = obj.appendToList(a, b, c);
        printList(res, res.length);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number[]}
*/

class Solution {
    appendToList(a, b, c) {
        // Create a list
        let result = [];
        
        // Append a, b, c to the list
        result.push(a);
        result.push(b);
        result.push(c);
        
        // Return the list
        return result;
    }
}
