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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let N = input_ar0[0];
        let K = input_ar0[1];
        let arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.toyCount(arr, N, K));
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @param {number} K
 * @returns {number}
*/

class Solution {
    
    /**
     * Function to find the maximum number of toys that can be bought with a given budget.
     * @param {number[]} arr - The array of toy prices.
     * @param {number} N - The number of toys.
     * @param {number} K - The total budget.
     * @returns {number} - The maximum number of toys that can be bought within the budget.
     */
    toyCount(arr, N, K) {
        // Sort the toy prices in ascending order to maximize the number of toys
        arr.sort((a, b) => a - b);
        
        let res = 0; // To count the number of toys
        let spent = 0; // To keep track of the total spent amount
        
        // Iterate through the sorted array of toy prices
        for (let i = 0; i < arr.length; i++) {
            // If the current toy can be bought without exceeding the budget, buy it
            if (spent < K && arr[i] <= K - spent) {
                res++;        // Increment the count of toys
                spent += arr[i]; // Add the toy price to the total spent
            } else {
                break; // If the toy cannot be bought within the remaining budget, stop
            }
        }
        
        return res; // Return the total number of toys bought
    }
}
