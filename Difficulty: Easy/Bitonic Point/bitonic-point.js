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

        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.findMaximum(arr);
        console.log(res);
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
    /**
     * Function to find the maximum element in the array that is greater than its next element.
     * @param {number[]} arr - The input array of numbers.
     * @returns {number} - The value of the element that is greater than its next element.
     */
    findMaximum(arr) {
        
        let index = 0; // Variable to store the index of the element that is greater than its next
        
        // Iterate through the array to find the first element that is greater than the next one
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                index = i; // Found the element that is greater than its next
                break;
            }
        }
        
        // Return the value of the element at the found index
        return arr[index];
    }
}
