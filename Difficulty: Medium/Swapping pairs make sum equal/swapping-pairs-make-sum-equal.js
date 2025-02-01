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
        // let [n, m] = readLine().trim().split(" ").map((x) => parseInt(x));
        let A = readLine().trim().split(" ").map((x) => parseInt(x));
        let B = readLine().trim().split(" ").map((x) => parseInt(x));

        let obj = new Solution();
        let res = obj.findSwapValues(A, B);
        if (res)
            console.log("true");
        else
            console.log("false");
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} a - First array of numbers
 * @param {number[]} b - Second array of numbers
 * @return {boolean} - Returns true if there exists a swap between elements of a and b that balance the sums, otherwise false.
 */

class Solution {

    findSwapValues(a, b) {
        // Initialize the sum variables for both arrays
        let sumA = 0, sumB = 0;
        
        // Use a Set to store elements of array b for fast lookup
        let elementsInB = new Set(b);
        
        // Calculate the sum of elements in array a
        for (let i = 0; i < a.length; i++) {
            sumA += a[i];
        }
        
        // Calculate the sum of elements in array b
        for (let i = 0; i < b.length; i++) {
            sumB += b[i];
        }
        
        // Calculate the difference between the sums of a and b
        let targetDifference = sumA - sumB;
        
        // If the difference is odd, it's impossible to find a valid swap
        if (targetDifference % 2 !== 0) {
            return false;
        }
        
        // Check if there exists a pair of elements that satisfies the condition for swapping
        for (let i = 0; i < a.length; i++) {
            let requiredValue = a[i] - targetDifference / 2;
            
            // If the required value exists in set b, a valid swap is possible
            if (elementsInB.has(requiredValue)) {
                return true;
            }
        }
        
        // If no valid swap is found, return false
        return false;
    }
}
