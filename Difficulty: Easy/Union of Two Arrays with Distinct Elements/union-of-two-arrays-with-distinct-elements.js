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
        if (res.length == 0) {
            console.log("[]");
        } else {
            printArray(res, res.length);
        }
    }
}
// } Driver Code Ends

// User function Template for javascript
class Solution {
    // Function to find the union of two arrays and return the sorted result
    findUnion(a, b) {
        // Create a Set to automatically remove duplicates from both arrays
        const fruits = new Set([...a, ...b]);
        
        // Convert the Set into an array
        let result = [];
        for (const fruit of fruits) {
            result.push(fruit);
        }

        // Sort the result array in ascending order and return it
        return result.sort((a, b) => a - b);
    }
}
