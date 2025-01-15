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
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        // let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.singleNumber(arr);

        console.log(res.join(' ')); // Print the array as a space-separated string
        tc--;
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number[]}
 */

class Solution {
    singleNumber(arr) {
        // Step 1: XOR all elements to get xorResult, which is the XOR of the two distinct numbers
        let xorResult = 0;
        for (let num of arr) {
            xorResult ^= num;
        }

        // Step 2: Find a set bit in xorResult (rightmost set bit)
        let rightmostSetBit = xorResult & -xorResult;

        // Step 3: Divide numbers into two groups and XOR each group
        let num1 = 0, num2 = 0;
        for (let num of arr) {
            if ((num & rightmostSetBit) !== 0) {
                num1 ^= num;  // Group with the set bit
            } else {
                num2 ^= num;  // Group with the unset bit
            }
        }

        // Step 4: Return the two numbers in increasing order
        return [num1, num2].sort((a, b) => a - b);
    }
}
