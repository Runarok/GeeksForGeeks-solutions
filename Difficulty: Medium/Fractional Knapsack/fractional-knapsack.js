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
    const t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        // Read values array
        let values = readLine().split(' ').map(x => parseInt(x));

        // Read weights array
        let weights = readLine().split(' ').map(x => parseInt(x));

        // Read the knapsack capacity
        let W = parseInt(readLine());

        let ob = new Solution();
        console.log(ob.fractionalknapsack(values, weights, W).toFixed(6));
        console.log("~");
    }
}

class Item {
    constructor(val, weight) {
        this.value = val;
        this.weight = weight;
    }
}

// } Driver Code Ends

// User function Template for javascript
class Solution {
    // Function to find the maximum value in the fractional knapsack
    fractionalknapsack(val, wt, capacity) {
        // Initialize an array to store value, weight, and value-to-weight ratio
        let items = [];
        let prof = 0;
        
        // Step 1: Store items along with their value-to-weight ratio
        for (let i = 0; i < val.length; i++) {
            const unit = val[i] / wt[i];  // Value-to-weight ratio
            items.push([val[i], wt[i], unit]);  // Push value, weight, and ratio as a tuple
        }
        
        // Step 2: Sort the items in descending order based on the value-to-weight ratio
        items.sort((a, b) => b[2] - a[2]);
        
        // Step 3: Calculate the maximum profit
        for (let i = 0; i < items.length; i++) {
            // If the current item can be fully included
            if (capacity >= items[i][1]) {
                capacity -= items[i][1];
                prof += items[i][0];  // Add the value of the full item
            } 
            // If the current item can only be partially included
            else {
                prof += items[i][0] * (capacity / items[i][1]); // Add the proportional value of the item
                break; // No capacity left to add more items
            }
        }
        
        return prof;
    }
}
