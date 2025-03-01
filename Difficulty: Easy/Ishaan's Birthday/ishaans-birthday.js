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
        let a = new Array(26);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<26;i++)
            a[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.getMinCost(a));
    
console.log("~");
}
}
// } Driver Code Ends

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to get the minimum cost by calculating the cost for each alphabet and finding the minimum
    getMinCost(arr) {
        let ans = 1e18;  // Initialize ans as a large number because we are looking for the minimum cost

        // Iterate through all possible starting positions for the alphabet (0 to 25)
        for (let i = 0; i < 26; i++) {
            let cost = 0;  // Initialize cost for each starting position

            // Iterate through all possible target positions for the alphabet (0 to 25)
            for (let j = 0; j < 26; j++) {
                // Calculate cost for shifting from alphabet j to alphabet i
                cost += arr[j] * Math.abs(i - j);
            }

            // Update the answer with the minimum cost
            ans = Math.min(ans, cost);
        }

        // Return the minimum cost found
        return ans;
    }
}
