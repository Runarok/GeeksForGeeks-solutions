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
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        console.log(obj.firstRepeated(arr));

        console.log("~");
    }
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    // Function to return the position of the first repeating element.
    firstRepeated(arr) {
        let indexMap = {};  // To store the first occurrence index of each element
        let firstRepeatIndex = Infinity; // To track the smallest index of a repeating element

        for (let i = 0; i < arr.length; i++) {
            if (indexMap.hasOwnProperty(arr[i])) {
                // If element already seen, update firstRepeatIndex if needed
                firstRepeatIndex = Math.min(firstRepeatIndex, indexMap[arr[i]]);
            } else {
                // If seeing this element for the first time, store its 1-based index
                indexMap[arr[i]] = i + 1;
            }
        }

        // If no repeating element found, return -1
        return firstRepeatIndex !== Infinity ? firstRepeatIndex : -1;
    }
}
