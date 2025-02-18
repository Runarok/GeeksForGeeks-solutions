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
        let obj = new Solution();
        let res = obj.findSum(n);
        printList(res, res.length);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

class Solution {
    /**
     * Function to find the sum of odd and even numbers from 1 to n.
     * @param {number} n - The upper limit up to which sums are calculated.
     * @returns {number[]} An array with the sum of odd numbers at index 0, and the sum of even numbers at index 1.
     */
    findSum(n) {
        let oddSum = 0;  // Variable to store the sum of odd numbers
        let evenSum = 0;  // Variable to store the sum of even numbers
        
        for (let i = 1; i <= n; i++) {
            if (i % 2 !== 0) {  // Check if the number is odd
                oddSum += i;
            } else {  // If the number is even
                evenSum += i;
            }
        }
        
        return [oddSum, evenSum];  // Return both sums as an array
    }
}
