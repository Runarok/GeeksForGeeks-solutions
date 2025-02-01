//{ Driver Code Starts
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
    let a = "";
    for (let i = 0; i < n; i++) {
        let s = "";
        s += res[i][0];
        s += " ";
        s += res[i][1];
        if (i != n - 1) {
            s += ", ";
        }
        a += s;
    }
    console.log(a);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let x = parseInt(readLine());
        let arr1 = readLine().trim().split(" ").map((x) => parseInt(x));
        let arr2 = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.allPairs(x, arr1, arr2);
        printList(res, res.length);

        console.log("~");
    }
} // } Driver Code Ends
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} target - The target sum for the pairs
 * @param {number[]} arr1 - First array of numbers
 * @param {number[]} arr2 - Second array of numbers
 * @returns {number[][]} - An array of pairs that sum up to the target
 */
class Solution {
    allPairs(target, arr1, arr2) {
        // Sort the first array for ordered pairing
        arr1.sort((a, b) => a - b);
        
        // Map to track the frequency of elements in arr2
        let freqMap = new Map();

        // Populate the frequency map for arr2
        for (let b of arr2) {
            freqMap.set(b, (freqMap.get(b) || 0) + 1);
        }
    
        // Array to store the valid pairs
        const pairs = [];
    
        // Iterate through arr1 and find complement pairs in arr2
        for (let a of arr1) {
            // Calculate the complement needed to reach the target
            let complement = target - a;
    
            // If the complement exists in arr2, add pairs
            if (freqMap.has(complement)) {
                let count = freqMap.get(complement);
                // Add all pairs with the current 'a' and the complement
                while (count-- > 0) {
                    pairs.push([a, complement]);
                }
            }
        }
    
        // Return the list of pairs
        return pairs;
    }
}
