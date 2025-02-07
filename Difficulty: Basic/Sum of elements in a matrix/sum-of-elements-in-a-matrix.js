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
        let [N,M] =  readLine().trim().split(" ").map((x) => parseInt(x));
        let Grid = [];
        for(let j = 0;j<N;j++){
            let row=readLine().trim().split(" ").map((x) => parseInt(x));
            Grid.push(row);
        }
        let obj = new Solution();
        let res = obj.sumOfMatrix(N,M,Grid);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N - Number of rows in the matrix
 * @param {number} M - Number of columns in the matrix
 * @param {number[][]} Grid - 2D array representing the matrix
 * @return {number} - Sum of all elements in the matrix
 */

class Solution {
    sumOfMatrix(N, M, Grid) {
        let totalSum = 0; // Variable to store the sum of matrix elements

        // Iterate through each element in the matrix and add it to totalSum
        for (let row = 0; row < N; row++) {
            for (let col = 0; col < M; col++) {
                totalSum += Grid[row][col];
            }
        }
        
        return totalSum; // Return the final computed sum
    }
}
