//{ Driver Code Starts
// Initial Template for javascript

'use strict';
const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

rl.question('', (t) => {
    const solution = new Solution();
    let linesRead = 0;

    rl.on('line', (input) => {
        if (linesRead === parseInt(t)) {
            rl.close();
            return;
        }

        linesRead++;
        const arr = input.trim().split(/\s+/).map(Number);
        console.log(solution.findMissing(arr));
        console.log("~");
    });
});
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    findMissing(arr) {
        // Calculate the common difference (d) from the first two elements
        let diff = (arr[arr.length - 1] - arr[0]) / arr.length;
        
        // Traverse through the array and find the missing element
        for (let i = 0; i < arr.length - 1; i++) {
            // If the difference between arr[i] and arr[i+1] is greater than the common difference
            if (arr[i+1] - arr[i] > diff) {
                // The missing element is arr[i] + diff
                return arr[i] + diff;
            }
        }
        // If no missing element, return -1 (though not needed as per the problem statement)
        return -1;
    }
}
