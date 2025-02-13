//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x)); // Array input

        let obj = new Solution();
        console.log(obj.countTriangles(arr));
        console.log("~");
    }
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to count the number of possible triangles
    countTriangles(arr) {
        let triangleCount = 0;

        // Iterate through all possible triplets
        for (let i = 0; i < arr.length - 2; i++) {
            for (let j = i + 1; j < arr.length - 1; j++) {
                for (let k = j + 1; k < arr.length; k++) {
                    // Check if the three sides form a valid triangle
                    if (arr[i] + arr[j] > arr[k] && 
                        arr[i] + arr[k] > arr[j] && 
                        arr[j] + arr[k] > arr[i]) {
                        triangleCount++;
                    }
                }
            }
        }

        return triangleCount;
    }
}
