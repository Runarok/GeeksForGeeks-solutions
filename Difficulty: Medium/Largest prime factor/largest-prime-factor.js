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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.largestPrimeFactor(N);
        if (res === -0) res = 0;
        console.log(res);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @return {number}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    largestPrimeFactor(n) {
        let largest = -1;

        // Remove all factors of 2 (even numbers)
        while (n % 2 === 0) {
            largest = 2;
            n = Math.floor(n / 2);
        }

        // Check for odd factors starting from 3
        for (let i = 3; i * i <= n; i += 2) {
            while (n % i === 0) {
                largest = i;
                n = Math.floor(n / i);
            }
        }

        // If n is a prime number greater than 2
        if (n > 2) largest = n;

        return largest;
    }
}
