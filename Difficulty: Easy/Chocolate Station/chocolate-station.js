//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine(), 10);
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let price = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.getChocolateCost(arr, price);
        console.log(res);
    }
}

// } Driver Code Ends

// User function Template for javascript
// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} price
 * @returns {number}
 */

class Solution {
    getChocolateCost(arr, price) {
        // Variable to track excess chocolates (balance) carried forward.
        let balance = 0;

        // Variable to track total chocolates that need to be bought.
        let chocolatesToBuy = 0;

        // If the first child needs chocolates, we buy those directly.
        if (arr[0] > 0) {
            chocolatesToBuy += arr[0];
        }

        // Traverse the array from the second child onwards.
        for (let i = 1; i < arr.length; i++) {
            // Difference between chocolates needed by the current and previous child.
            let difference = Math.abs(arr[i - 1] - arr[i]);

            // Case 1: Current child needs fewer chocolates than the previous child.
            if (arr[i] < arr[i - 1]) {
                balance += difference; // Accumulate excess chocolates as balance.
            } 
            // Case 2: Current child needs more chocolates than the previous child.
            else {
                if (difference > balance) {
                    chocolatesToBuy += difference - balance; // Buy additional chocolates if balance is insufficient.
                    balance = 0; // All balance chocolates have been used.
                } else {
                    balance -= difference; // Use balance chocolates to cover the difference.
                }
            }
        }

        // Total cost is the number of chocolates bought multiplied by the price per chocolate.
        return chocolatesToBuy * price;
    }
}
