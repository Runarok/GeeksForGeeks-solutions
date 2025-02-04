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
        let s = readLine();
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.minValue(s, k);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */

class Solution {
    // Function to find the minimum value by reducing characters in string s k times
    minValue(s, k) {
        // Object to store the frequency count of each character in the string
        const charCount = {};
        
        // Populate the frequency count for each character
        for (let char of s) {
            charCount[char] = (charCount[char] || 0) + 1;
        }
        
        // Create an array of character frequencies and sort in descending order
        const minHeap = Object.values(charCount).sort((a, b) => b - a);
        
        // Perform 'k' operations to reduce the frequency of the most frequent characters
        for (let i = 0; i < k; i++) {
            if (minHeap.length === 0) break;  // If no characters left to reduce, exit loop
            
            // Pop the most frequent character count (smallest one in the sorted list)
            let minCount = minHeap.shift();
            
            // If count is greater than 1, reduce it and push back into the heap
            if (minCount > 1) {
                minHeap.push(minCount - 1);
            }
            
            // Re-sort the heap after modifying the counts
            minHeap.sort((a, b) => b - a);
        }
        
        // Calculate the final minimum value by summing the squares of the frequencies
        let minValue = 0;
        for (let val of minHeap) {
            minValue += val * val;
        }
        
        // Return the calculated minimum value
        return minValue;
    }
}
