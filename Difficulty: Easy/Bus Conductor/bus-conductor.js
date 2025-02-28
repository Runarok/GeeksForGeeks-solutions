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
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let chairs = new Array(n);
        for(let i=0;i<n;i++)
        {
            chairs[i] = parseInt(input_line[i]);
        }
        
        input_line = readLine().split(' ');
        let passengers = new Array(n);
        for(let i=0;i<n;i++)
        {
            passengers[i] = parseInt(input_line[i]);
        }
        
        let obj = new Solution();
        let ans = obj.findMoves(n, chairs, passengers);
        if(ans==-0)
            ans=0;
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} n - Number of chairs and passengers
 * @param {number[]} chairs - Array representing the positions of chairs
 * @param {number[]} passengers - Array representing the positions of passengers
 * @returns {number} - The minimum number of moves required to place all passengers in chairs
 */

class Solution {
    // Function to find the minimum number of moves to place all passengers in the chairs
    findMoves(n, chairPositions, passengerPositions) {
        // Sort both chair and passenger arrays in ascending order
        chairPositions.sort((a, b) => a - b);
        passengerPositions.sort((a, b) => a - b);

        let totalMoves = 0; // Variable to store the total number of moves

        // Calculate the total number of moves by summing the absolute difference
        // between the corresponding chair and passenger positions
        for (let i = 0; i < n; i++) {
            totalMoves += Math.abs(chairPositions[i] - passengerPositions[i]);
        }

        // Return the total number of moves
        return totalMoves;
    }
}
