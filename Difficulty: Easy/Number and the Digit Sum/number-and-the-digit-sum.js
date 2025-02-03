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
    for(; i<t; i++) {
        let input1 = readLine().split(' ').map(x => parseInt(x));
        let n = input1[0];
        let k = input1[1];
        let obj = new Solution();
        let res = obj.numberCount(n, k);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} n
 * @param {number} k
 * @returns {number}
*/

class Solution {
    // Function to count the number of occurrences of k in the given number.
    numberCount(n, k) {
        let count = 0;  // Initialize the count of occurrences
        
        // Iterate through each number from 0 to n
        for (let i = 0; i <= n; i++) {
            let sum = 0;  // Variable to store the sum of digits
            let p = i;  // Variable to calculate the sum of digits
            
            // Calculate the sum of digits of the number
            while (p > 0) {
                sum += p % 10;  // Add the last digit of p to sum
                p = Math.floor(p / 10);  // Remove the last digit from p
            }
            
            // Check if the number minus the sum of its digits is greater than or equal to k
            if (i - sum >= k) {
                count++;  // Increment the count if the condition is satisfied
            }
        }
        
        return count;  // Return the final count of occurrences
    }
}
