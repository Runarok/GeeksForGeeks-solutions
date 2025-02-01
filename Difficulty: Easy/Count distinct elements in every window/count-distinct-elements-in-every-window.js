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
        // Read the array first
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());

        let obj = new Solution();
        let res = obj.countDistinct(arr, x);
        let s = "";
        for (let i = 0; i < res.length; i++) s += res[i] + " ";
        console.log(s);

        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - The input array
 * @param {number} k - The size of the window
 * @returns {number[]} - Array containing the count of distinct elements in each window
 */
class Solution {
    countDistinct(arr, k) {
        const result = [];  // Array to store the result
        const freqMap = new Map();  // Map to store the frequency of elements in the current window

        // Initialize the frequency map for the first window (first 'k' elements)
        for (let i = 0; i < k; i++) {
            // Add the element to the frequency map and update its frequency
            freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
        }

        // The size of the frequency map represents the number of distinct elements in the first window
        result.push(freqMap.size);

        // Slide the window from position 'k' to the end of the array
        for (let i = k; i < arr.length; i++) {
            // Element going out of the window
            const outgoing = arr[i - k];
            if (freqMap.get(outgoing) === 1) {
                // If the outgoing element has only one occurrence, remove it from the map
                freqMap.delete(outgoing);
            } else {
                // Otherwise, decrease its frequency in the map
                freqMap.set(outgoing, freqMap.get(outgoing) - 1);
            }

            // Element coming into the window
            const incoming = arr[i];
            // Add the incoming element to the map (or increase its frequency if it's already in the map)
            freqMap.set(incoming, (freqMap.get(incoming) || 0) + 1);

            // Add the count of distinct elements in the current window to the result
            result.push(freqMap.size);
        }

        // Return the result array containing the count of distinct elements for each window
        return result;
    }
}
