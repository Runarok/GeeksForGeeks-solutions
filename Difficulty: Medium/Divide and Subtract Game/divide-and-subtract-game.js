//{ Driver Code Starts
//Initial Template for javascript

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
        let n = input_ar0[0];
        
        let obj = new Solution();
        console.log(obj.divAndSub(n));
        
    
console.log("~");
}
}
// } Driver Code Ends

// Back-end complete function Template for javascript

class Solution {
    divAndSub(N) {
        // Base case: if N is 1, Arya always wins
        if (N === 1) return "Arya";
        
        // Array to store the winning player at each number
        let a = new Array(N + 1);
        
        // Initializing values for numbers 0 to 5
        a[0] = 0; // Base case: No player can win at 0
        for (let i = 1; i <= 5; i++) {
            a[i] = 1; // Arya can win for numbers 1 through 5
        }
        
        // For each number from 6 to N, calculate the winner
        for (let i = 6; i <= N; i++) {
            a[i] = 0; // Assume the current number is a losing position
            
            // Check for possible divisions and subtractions that lead to a win
            if (a[Math.floor(i / 2)] === 0) a[i] = 1;
            else if (a[i - 2] === 0) a[i] = 1;
                
            if (a[Math.floor(i / 3)] === 0) a[i] = 1;
            else if (a[i - 3] === 0) a[i] = 1;
            
            if (a[Math.floor(i / 4)] === 0) a[i] = 1;
            else if (a[i - 4] === 0) a[i] = 1;
                
            if (a[Math.floor(i / 5)] === 0) a[i] = 1;
            else if (a[i - 5] === 0) a[i] = 1;
        }
        
        // If the last number is a winning position for Jon, return "Jon"
        if (a[N] === 1) return "Jon";
        // Otherwise, Arya wins
        else return "Arya";
    }
}
