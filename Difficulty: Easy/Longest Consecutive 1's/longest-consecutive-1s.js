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
    for(;i<t;i++)
    {
        let input_line = readLine().split(' ').map(x=>parseInt(x));
        let n = input_line[0];
        let obj = new Solution();
        console.log(obj.maxConsecutiveOnes(n))
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * Function to calculate the longest consecutive 1's in the binary representation of a number
 * @param {Number} N - The input number to check for consecutive 1's
 * @returns {Number} - The length of the longest sequence of consecutive 1's in the binary representation
 */
class Solution {
    maxConsecutiveOnes(N) {
        let maxCount = 0;
        let currentCount = 0;

        // Loop until N becomes 0
        while (N > 0) {
            // If the current bit is 1, increment the current consecutive count
            if (N & 1) {
                currentCount++;
            } else {
                // If the current bit is 0, reset the current consecutive count
                currentCount = 0;
            }

            // Update maxCount if currentCount is greater
            maxCount = Math.max(maxCount, currentCount);

            // Right shift N to check the next bit
            N >>= 1;
        }

        return maxCount;
    }
}
