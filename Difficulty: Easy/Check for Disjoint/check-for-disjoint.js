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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        // let n = parseInt(readLine());
        let arr1 = readLine().split(' ').map(x => parseInt(x));
        let arr2 = readLine().split(' ').map(x => parseInt(x));
        let ob = new Solution();
        let res = ob.areDisjoint(arr1, arr2);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number[]} a - First array.
 * @param {number[]} b - Second array.
 * @returns {boolean} - Returns true if arrays are disjoint, false otherwise.
 */

class Solution {
    // Function to check if two arrays have no common elements (disjoint arrays).
    areDisjoint(a, b) {
        const lengthA = a.length;
        const lengthB = b.length;
        
        const frequencyMap = new Map();  // Map to store frequency of elements in array 'a'

        // Populate the map with elements from array 'a'
        for (let i = 0; i < lengthA; i++) {
            const element = a[i];
            frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
        }

        // Check each element of array 'b' against the map
        for (let i = 0; i < lengthB; i++) {
            const element = b[i];
            if (frequencyMap.has(element)) {
                return false;  // Common element found, arrays are not disjoint
            }
        }

        return true;  // No common element found, arrays are disjoint
    }
}
