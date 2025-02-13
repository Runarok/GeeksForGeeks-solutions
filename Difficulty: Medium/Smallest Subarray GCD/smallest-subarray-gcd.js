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
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr = readLine().split(' ').map(Number);
        let k = parseInt(readLine());

        let obj = new Solution();
        let res = obj.findSmallestSubArr(arr, k);
        if (res === -0) {
            res = 0;
        }
        console.log(res.toString());
        tc--;
        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to find the smallest subarray whose GCD is equal to k
    findSmallestSubArr(arr, k) {
        let minLength = Infinity; // Initialize to a large value
        const n = arr.length;
        
        // Loop through the array to try different starting points
        for (let i = 0; i < n; i++) {
            let currentGCD = 0; // Reset current GCD for new starting point
            
            // Loop through the array from the current starting point
            for (let j = i; j < n; j++) {
                currentGCD = this.gcd(currentGCD, arr[j]); // Update GCD
                
                // Check if the current GCD is equal to k
                if (currentGCD === k) {
                    minLength = Math.min(minLength, j - i + 1); // Update minimum length
                }
                
                // If current GCD is less than k, we can stop checking further
                if (currentGCD < k) {
                    break;
                }
            }
        }
        
        // If minLength is still Infinity, no such subarray exists
        return minLength === Infinity ? -1 : minLength;
    }
    
    // Helper function to calculate GCD using Euclid's algorithm
    gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
