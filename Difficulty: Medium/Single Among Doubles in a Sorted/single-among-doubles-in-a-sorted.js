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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.findOnce(arr);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the element that appears only once in an array, 
    // where all other elements appear twice.
    findOnce(arr) {
        // Map to store the frequency of each element in the array
        const frequencyMap = new Map();

        // Loop through the array and count the occurrences of each element
        for (let value of arr) {
            frequencyMap.set(value, frequencyMap.get(value) + 1 || 1);
        }

        // Loop through the map and return the key (element) that appears once
        for (let [element, frequency] of frequencyMap.entries()) {
            if (frequency === 1) {
                return element; // Return the element that appears only once
            }
        }

        // If no such element exists, return -1
        return -1;
    }
}
