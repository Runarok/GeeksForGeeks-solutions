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
class Solution {
    // Function to return a list containing the union of the two arrays.
    findUnion(a, b) {
        const result = [];  // Array to store the union of both arrays
        let i = 0, j = 0;   // Pointers for both arrays

        // Traverse both arrays and add elements to result in sorted order
        while (i < a.length && j < b.length) {
            if (a[i] <= b[j]) {
                // Add a[i] if it's not already in result
                if (result.length === 0 || result[result.length - 1] !== a[i]) {
                    result.push(a[i]);
                }
                i++;  // Move pointer for array a
            } else {
                // Add b[j] if it's not already in result
                if (result.length === 0 || result[result.length - 1] !== b[j]) {
                    result.push(b[j]);
                }
                j++;  // Move pointer for array b
            }
        }

        // If there are remaining elements in array a, add them to result
        while (i < a.length) {
            if (result.length === 0 || result[result.length - 1] !== a[i]) {
                result.push(a[i]);
            }
            i++;  // Move pointer for array a
        }

        // If there are remaining elements in array b, add them to result
        while (j < b.length) {
            if (result.length === 0 || result[result.length - 1] !== b[j]) {
                result.push(b[j]);
            }
            j++;  // Move pointer for array b
        }

        return result;  // Return the union of the two arrays
    }
}
