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
        let A = new Array();
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < input_ar1.length; i++) A.push(input_ar1[i]);
        let nd = readLine().split(' ').map(x => parseInt(x));
        // let N = A[0];
        let D = nd[0];
        let obj = new Solution();
        console.log(obj.smallestDivisor(A, D));
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
    smallestDivisor(arr, k) {
        // Helper function to check if a divisor x satisfies the condition
        const isSatisfied = (x) => {
            let value = arr.reduce((sum, num) => sum + Math.floor(num / x) + (num % x > 0), 0);
            return value <= k;
        };

        let low = 1, high = Math.max(...arr);
        let min_x = 1;

        // Binary search for the smallest divisor
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let result = isSatisfied(mid);
            if (!result) {
                low = mid + 1;
            } else {
                min_x = mid;
                high = mid - 1;
            }
        }

        return min_x;
    }
}
