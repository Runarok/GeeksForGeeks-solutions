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
        let [P, T, N, R] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.getCompundInterest(P, T, N, R);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
     * Function to calculate the compound interest for a given principal, time, frequency, and rate.
     * 
     * @param {number} P - Principal amount
     * @param {number} T - Time period in years
     * @param {number} N - Number of times interest is compounded per year
     * @param {number} R - Annual interest rate (in percentage)
     * @returns {number} - The amount after compound interest (rounded to the nearest integer)
     */
    getCompundInterest(P, T, N, R) {
        // Calculate the final amount after compound interest using the formula
        let A = P * Math.pow((1 + (R / 100) / N), N * T);

        // Return the calculated amount, rounded to the nearest integer
        return parseInt(A);
    }
}
