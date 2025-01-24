//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));

        let arr = input_ar1;

        let obj = new Solution();
        console.log(obj.subsetXORSum(arr));
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    subsetXORSum(arr) {
        let n = arr.length;
        let result = 0;

        // For each bit position (from 0 to 31, assuming 32-bit integers)
        for (let i = 0; i < 32; i++) {  // 32-bit integers
            let count = 0;
            
            // Count how many numbers have the i-th bit set
            for (let num of arr) {
                if (num & (1 << i)) {
                    count++;
                }
            }

            // Each bit contributes to exactly 2^(n-1) subsets
            if (count > 0) {
                result += (1 << i) * Math.pow(2, n - 1);
            }
        }

        return result;
    }
}
