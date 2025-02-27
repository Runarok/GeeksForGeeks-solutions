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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = parseInt(input_ar1[0]);
        let sum = parseInt(input_ar1[1]);
        let obj = new Solution();
        console.log(obj.largestNumber(n, sum));
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} n
 * @param {number} sum
 * @returns {string}
*/

class Solution 
{
    //Function to return the largest possible number of n digits
    //with sum equal to given sum.
    largestNumber(n, sum)
    {
        // Edge case: if the sum is zero, the only valid number is all zeros.
        if (sum == 0) {
            let result = '';
            for (let i = 0; i < n; i++) {
                result += '0';
            }
            return result;
        }
        
        // If the required sum is larger than the maximum possible sum for n digits, return -1.
        if (sum > 9 * n) {
            return -1;
        }
        
        // Variable to store the resulting largest number.
        let result = '';
        
        // Loop through each digit position.
        for (let i = 0; i < n; i++) {
            // Place the highest possible digit at the current position.
            if (sum >= 9) {
                result += '9';
                sum -= 9;
            } 
            // Place the remaining sum if less than 9.
            else {
                result += sum + '';
                sum = 0;
            }
        }
        
        return result;
    }
}
