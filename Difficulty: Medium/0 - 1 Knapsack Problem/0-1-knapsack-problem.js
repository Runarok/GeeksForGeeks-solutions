//{ Driver Code Starts
// Initial Template for JavaScript
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
    let testCases = parseInt(readLine());
    for (let i = 0; i < testCases; i++) {
        let inputLine = readLine().split(' ');
        let capacity = parseInt(inputLine[0]); // Capacity of the knapsack

        let values = readLine().split(' ').map(x => parseInt(x)); // Values of the items
        let weights =
            readLine().split(' ').map(x => parseInt(x)); // Weights of the items

        let solution = new Solution();
        let maxValue = solution.knapSack(capacity, values, weights); // Maximum value
        if (maxValue === -0) maxValue = 0; // Handle potential -0
        console.log(maxValue);
        console.log("~");
    }
}

// } Driver Code Ends

// User-defined function Template for JavaScript  

/**  
 * @param {number} maxWeight - The capacity of the knapsack  
 * @param {number[]} values - Array containing the values of items  
 * @param {number[]} weights - Array containing the weights of items  
 * @returns {number} - Maximum value that can be placed in the knapsack  
 */  

class Solution {  
    // Function to compute the maximum value that can be stored in the knapsack  
    knapSack(maxWeight, values, weights) {  
        // Initialize a 2D array for dynamic programming  
        let dpTable = [];  

        for (let i = 0; i <= values.length; i++) {  
            let row = [];  
            for (let j = 0; j <= maxWeight; j++) {  
                row.push(0);  
            }  
            dpTable.push(row);  
        }  

        // Fill the DP table using bottom-up approach  
        for (let i = 1; i <= values.length; i++) {  
            for (let j = 1; j <= maxWeight; j++) {  
                if (weights[i - 1] > j) {  
                    dpTable[i][j] = dpTable[i - 1][j];  
                } else {  
                    dpTable[i][j] = Math.max(  
                        dpTable[i - 1][j],  
                        values[i - 1] + dpTable[i - 1][j - weights[i - 1]]  
                    );  
                }  
            }  
        }  

        // Return the maximum value possible with the given knapsack capacity  
        return dpTable[values.length][maxWeight];  
    }  
}  
