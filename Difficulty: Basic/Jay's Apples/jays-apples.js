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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.minimumApple(arr);
        console.log(res);
    }
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the minimum number of apples eaten.
    minimumApple(arr) {
        // Create a Set to store unique apple types
        let mySet = new Set();
        let count = 0;

        // Iterate through the array of apples
        for(let i = 0; i < arr.length; i++){
            // If the apple is already in the Set, skip it
            if(mySet.has(arr[i])){
                continue;
            }
            // Add the apple type to the Set
            mySet.add(arr[i]);
            // Increment the count of unique apples
            count += 1;
        }

        // Return the total count of unique apples
        return count;
    }
}
