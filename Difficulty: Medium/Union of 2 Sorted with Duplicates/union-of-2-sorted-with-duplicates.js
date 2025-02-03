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
        let a = readLine().split(' ').map(x => parseInt(x, 10));
        let b = readLine().split(' ').map(x => parseInt(x, 10));
        let obj = new Solution();
        let res = obj.findUnion(a, b);
        printArray(res, res.length);

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */

class Solution {
    // Function to return a list containing the union of the two arrays.
    findUnion(a, b) {
        let i = 0;
        let j = 0;
        let union = [];
        
        // Traverse through both arrays
        while (i < a.length && j < b.length) {
            
            if (a[i] < b[j]) {
                // If a[i] is smaller, add it to union if not already present
                if (union.length === 0 || union[union.length - 1] !== a[i]) {
                    union.push(a[i]);
                }
                i++;
            } else if (a[i] > b[j]) {
                // If b[j] is smaller, add it to union if not already present
                if (union.length === 0 || union[union.length - 1] !== b[j]) {
                    union.push(b[j]);
                }
                j++;
            } else {
                // If both are equal, add either and move both pointers
                if (union.length === 0 || union[union.length - 1] !== a[i]) {
                    union.push(a[i]);
                }
                i++;
                j++;
            }
        }
        
        // Add remaining elements of a if any
        while (i < a.length) {
            if (union[union.length - 1] !== a[i]) {
                union.push(a[i]);
            }
            i++;
        }
        
        // Add remaining elements of b if any
        while (j < b.length) {
            if (union[union.length - 1] !== b[j]) {
                union.push(b[j]);
            }
            j++;
        }
        
        return union; // Return the union of the two arrays
    }
}
