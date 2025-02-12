//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let N = readLine().trim();
        let obj = new Solution();
        let res = obj.isAdditiveSequence(N);
        console.log(Number(res));
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} n
 * @return {boolean}
 */

class Solution {
    // Function to check if the sequence is an additive sequence
    isAdditiveSequence(n) {
        const len = n.length;  // Get the length of the input string

        // Loop through possible split points for the first two numbers
        for (let i = 1; i < len - 1; i++) {
            for (let j = i + 1; j < len; j++) {
                // Extract the first and second number from the string
                const num1 = parseInt(n.substring(0, i));  // First number (from start to i)
                const num2 = parseInt(n.substring(i, j));  // Second number (from i to j)

                // Check if the sequence is valid starting with these two numbers
                if (isValid(n, num1, num2, j))
                    return true;  // If a valid sequence is found, return true
            }
        }
        return false;  // If no valid sequence is found, return false
    }
}

// Helper function to recursively check the additive sequence
function isValid(n, num1, num2, index) {
    // If the index has reached the end of the string, return true
    if (index === n.length)
        return true;

    // Calculate the sum of the two previous numbers
    let sum = num1 + num2;
    const sumStr = sum.toString();  // Convert the sum to string for comparison
    const sumLen = sumStr.length;   // Get the length of the sum string

    // If the substring at the current index matches the sum, check the next sequence
    if (index + sumLen <= n.length && n.substring(index, index + sumLen) === sumStr)
        return isValid(n, num2, sum, index + sumLen);  // Recur with updated values

    return false;  // If the sum doesn't match, return false
}
