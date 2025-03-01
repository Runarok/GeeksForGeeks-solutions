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
        // let n = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.countNonRepeated(arr));
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to return the count of non-repeated elements in the array.
    countNonRepeated(arr) {
        // Object to store the frequency of each element in the array.
        let frequencyMap = {};
        
        // Loop through the array to populate the frequency map.
        for (let element of arr) {
            if (frequencyMap[element]) {
                frequencyMap[element]++;
            } else {
                frequencyMap[element] = 1;
            }
        }
        
        // Variable to count elements that appear exactly once.
        let nonRepeatedCount = 0;
        
        // Check each element in the frequency map.
        for (let element in frequencyMap) {
            if (frequencyMap[element] === 1) {
                nonRepeatedCount++;
            }
        }
        
        // Return the final count of non-repeated elements.
        return nonRepeatedCount;
    }
}
