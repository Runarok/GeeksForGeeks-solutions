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
        let str = readLine().trim();
        let obj = new Solution();
        let res = obj.removeDuplicates(str);
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} n
 * @return {string}
 */

class Solution {
    // Function to remove duplicates from a string
    removeDuplicates(s) {
        const sArr = s.split("");  // Convert string to array of characters
        let temp = {};  // Object to track characters that have already been added
        let resultStr = [];  // Array to store the result string without duplicates
        
        // Loop through each character in the array
        for (let item of sArr) {
            if (!temp[item]) {  // If the character is not already in temp
                temp[item] = 1;  // Mark it as seen
                resultStr.push(item);  // Add the character to the result array
            }
        }
        
        return resultStr.join("");  // Convert the result array back to a string and return
    }
}
