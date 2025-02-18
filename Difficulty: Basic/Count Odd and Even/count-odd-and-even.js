//{ Driver Code Starts
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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let [oddCount, evenCount] = obj.countOddEven(arr);

        console.log(oddCount, evenCount);
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - Array of integers
 * @returns {number[]} - An array with two values: [oddCount, evenCount]
 */

class Solution {
    countOddEven(arr) {
        let oddCount = 0;   // Counter for odd numbers
        let evenCount = 0;  // Counter for even numbers
        
        // Loop through the array and count odd and even numbers
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenCount++;  // Increment even count if the number is divisible by 2
            } else {
                oddCount++;   // Increment odd count otherwise
            }
        }

        // Return the counts as an array [oddCount, evenCount]
        return [oddCount, evenCount];
    }
}
