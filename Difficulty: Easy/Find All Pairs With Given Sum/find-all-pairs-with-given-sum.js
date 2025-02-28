//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x, 10));
        let k = parseInt(readLine(), 10);
        let obj = new Solution();
        let res = obj.findAllPairs(arr, k);
        if (res.length === 0) {
            process.stdout.write('[]\n');
        }
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[i].length; j++) {
                process.stdout.write(res[i][j] + ' ');
            }
            process.stdout.write('\n');
        }
        process.stdout.write('~\n');
    }
}

// } Driver Code Ends

// User function Template for JavaScript
class Solution {
    /**
     * @param {number[]} arr - An array of numbers
     * @param {number} target - The target sum to find pairs for
     * @return {number[][]} - A 2D array of pairs where each pair adds up to the target
     */
    findAllPairs(arr, target) {
        // Create a Map to store the indices of elements in the array
        const indexMap = new Map();
        
        // Array to store the resulting pairs of indices
        const pairs = [];
        
        // Iterate through each element in the array
        for (let i = 0; i < arr.length; i++) {
            // Calculate the complement of the current element with respect to the target
            const comp = target - arr[i];
            
            // If the complement exists in the Map, add the pair of indices to the result
            if (indexMap.has(comp)) {
                const indices = indexMap.get(comp);
                for (const index of indices) {
                    pairs.push([index, i]);
                }
            }
            
            // If the current element is not in the Map, initialize it with an empty array
            if (!indexMap.has(arr[i])) {
                indexMap.set(arr[i], []);
            }
            
            // Add the current index to the Map under the key of the current element
            indexMap.get(arr[i]).push(i);
        }

        // Sort the pairs lexicographically by their first and second indices
        pairs.sort((a, b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            return a[0] - b[0];
        });
        
        // Return the sorted pairs
        return pairs;
    }
}
