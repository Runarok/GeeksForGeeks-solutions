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
    let t = parseInt(readLine());

    const solution = new Solution();

    while (t-- > 0) {
        let arr1 = readLine().split(' ').map(Number);
        let arr2 = readLine().split(' ').map(Number);

        // Call the function to check if arrays are equal
        console.log(solution.checkEqual(arr1, arr2) ? "true" : "false");
        console.log('~');
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {boolean}
 */

class Solution {
    // Function to check if two arrays are equal or not.
    checkEqual(a, b) {
        // If the arrays have different lengths, they can't be equal
        if (a.length !== b.length) {
            return false;
        }

        // Create frequency maps to store counts of each element in both arrays
        let mapA = new Map();
        let mapB = new Map();

        // Populate frequency maps for both arrays
        for (let i = 0; i < a.length; i++) {
            mapA.set(a[i], (mapA.get(a[i]) || 0) + 1);
            mapB.set(b[i], (mapB.get(b[i]) || 0) + 1);
        }

        // Compare the two frequency maps
        for (let [key, value] of mapA) {
            if (mapB.get(key) !== value) {
                return false;
            }
        }

        // If we pass all checks, the arrays are equal
        return true;
    }
}

