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
        let res = obj.intersection(a, b);
        if (res.length == 0) {
            console.log("[]");
            console.log("~");
        } else {
            printArray(res, res.length);

            console.log("~");
        }
    }
}
// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    // Function to find the intersection of two arrays
    intersection(a, b) {
        // Convert both arrays into sets to remove duplicates
        let setA = new Set(a);
        let setB = new Set(b);
        
        // Initialize an empty array to store the result
        let result = [];

        // Iterate over the elements of setA
        for (let data of setA) {
            // If the element is also present in setB, add it to the result array
            if (setB.has(data)) {
                result.push(data);
            }
        }

        // Return the resulting array with the intersection elements
        return result;
    }
}
