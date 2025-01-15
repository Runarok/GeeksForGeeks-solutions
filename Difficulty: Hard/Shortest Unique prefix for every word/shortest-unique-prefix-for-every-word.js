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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = "";
    for (i = 0; i < size; i++) {
        if (arr[i] == -0) arr[i] = 0;
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input = readLine().split(" ");
        for (let j = 0; j < n; j++) arr[j] = input[j];
        let obj = new Solution();
        let res = obj.findPrefixes(arr, n);
        printArray(res, res.length);
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string[]} arr
 * @param {number} n
 * @return {string[]}
 */

class Solution {
    findPrefixes(arr, n) {
        let result = [];
        
        // Function to find the shortest prefix for each word
        function getPrefix(word, arr) {
            for (let len = 1; len <= word.length; len++) {
                let prefix = word.substring(0, len);
                let isUnique = arr.filter(w => w.startsWith(prefix)).length === 1;
                if (isUnique) {
                    return prefix;
                }
            }
            return word;
        }

        // Iterate through each word and find the shortest unique prefix
        for (let word of arr) {
            result.push(getPrefix(word, arr));
        }

        return result;
    }
}
