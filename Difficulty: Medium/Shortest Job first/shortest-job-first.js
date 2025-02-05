//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let n = parseInt(readLine());
        let bt = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.solve(bt);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


// } Driver Code Ends


// User function Template for JavaScript
/**
 * @param {TreeNode} bt
 * @returns {number}
 */

class Solution {
    // Function to solve the given problem.
    solve(bt) {
       // Sort the input array in ascending order
       bt = bt.sort((a, b) => a - b);
       
       // Initialize the prefix sum and the total waiting time
       let prefixSum = 0;
       let totalWaitingTime = 0;

       // Loop through the sorted array (excluding the last element)
       for (let i = 0; i < bt.length - 1; i++) {
           // Add the current element to the prefix sum
           prefixSum += bt[i];

           // Add the prefix sum to the total waiting time
           totalWaitingTime += prefixSum;
       }

       // Return the average waiting time (rounded down)
       return Math.floor(totalWaitingTime / bt.length);
    }
}
