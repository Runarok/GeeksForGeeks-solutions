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
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.wineSelling(arr, n));
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript
/**
 * @param {number[]} Arr
 * @param {number} N
 * @returns {number}
 */

class Solution {
    // Function to find the maximum money the wine seller can make.
    wineSelling(Arr, N) {
        let buyer = 0, seller = 0, totalCost = 0;
        
        // Loop until all buyers and sellers are processed
        while (buyer < N && seller < N) {
            // Move buyer pointer to the next person who needs to buy wine (positive value)
            while (buyer < N && Arr[buyer] <= 0) buyer++;
            if (buyer === N) return totalCost; // If no more buyers, return total cost
            
            // Move seller pointer to the next person who needs to sell wine (negative value)
            while (seller < N && Arr[seller] >= 0) seller++;
            if (seller === N) return totalCost; // If no more sellers, return total cost
            
            // Determine the amount of wine to be transacted
            let transaction = Math.min(Arr[buyer], Math.abs(Arr[seller]));
            
            // Calculate cost as distance between buyer and seller multiplied by the quantity traded
            totalCost += Math.abs(buyer - seller) * transaction;
            
            // Adjust values after transaction
            Arr[buyer] -= transaction; // Reduce the amount buyer needs
            Arr[seller] += transaction; // Reduce the amount seller needs to sell
        }
        
        return totalCost; // Return the total cost after all transactions
    }
}
