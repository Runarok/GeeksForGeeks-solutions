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

class Solution {
    // Function to find the intersection of two arrays
    intersection(a, b) {
        let checkSet = new Set();  // Set to store elements from the first array 'a'
        let result = [];  // Array to store the common elements (intersection)

        // Add all elements of array 'a' to the set
        a.forEach(item => checkSet.add(item));
        
        // Check if elements from array 'b' are present in the set
        b.forEach(item => {
            if (checkSet.has(item)) {
                result.push(item);  // Add the common element to the result array
                checkSet.delete(item);  // Remove the element from the set to avoid duplicates
            }
        });
        
        return result;  // Return the intersection of arrays 'a' and 'b'
    }
}
