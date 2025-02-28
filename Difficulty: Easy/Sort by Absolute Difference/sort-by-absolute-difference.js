//{ Driver Code Starts
// Initial Template for javascript
'use strict';

// Position this line where user code will be pasted.
const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];
rl.on('line', (line) => { input.push(line); });

rl.on('close', () => {
    let t = parseInt(input[0].trim());
    let index = 1;

    while (t-- > 0) {
        let k = parseInt(input[index].trim());
        index++;
        let arr = input[index].trim().split(" ").map(Number);
        index++;

        let solution = new Solution();
        solution.sortABS(k, arr);

        console.log(arr.join(" "));
        console.log("~");
    }
});

// } Driver Code Ends



// User function Template for javascript

/**
 * @param {number} k
 * @param {number[]} arr
 */

class Solution {
    // Function to sort the array according to difference with given number.
    sortABS(k, arr) {
        // code here
        for (let i=0;i<arr.length;i++)
        arr[i] = arr[i]-k;
        arr.sort((a,b) => Math.abs(a)-Math.abs(b));
        for (let i=0;i<arr.length;i++)
        arr[i] = arr[i]+k;
        return arr;
    }
}