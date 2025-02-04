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
    let i = 0;
    for(;i<t;i++)
    {
        let inputLine = readLine(); 
        let [n,k] = inputLine.trim().split(" ").map(x => parseInt(x));
        inputLine = readLine();
        let price = new Array(n);
        let pos = 0;
        inputLine.trim().split(" ").map(x => {price[pos++] = parseInt(x);});
        
        let obj = new Solution();
        let ans = obj.buyMaximumProducts(n,k,price);
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript
/**
 * @param {number} n
 * @param {number} k
 * @param {number[]} price
 * @returns {number}
 */

class Solution {
    // Function to find the maximum number of products that can be bought.
    buyMaximumProducts(n, k, price) {
        let stockData = [];
        
        // Pair prices with their corresponding stock limit (day number)
        for (let i = 0; i < n; i++) {
            stockData.push([price[i], i + 1]);
        }
        
        // Sort stocks by price in ascending order
        stockData.sort((a, b) => a[0] - b[0]);
        
        let totalStocksBought = 0;

        // Purchase stocks starting from the cheapest
        for (let i = 0; i < n; i++) {
            let stockPrice = stockData[i][0];
            let stockLimit = stockData[i][1];
            
            // Calculate the maximum stocks we can afford on this day
            let stocksToPurchase = Math.min(stockLimit, Math.floor(k / stockPrice));
            
            totalStocksBought += stocksToPurchase;
            k -= stocksToPurchase * stockPrice;
            
            // If no money is left, stop buying
            if (k <= 0) {
                break;
            }
        }
        
        return totalStocksBought;
    }
}
