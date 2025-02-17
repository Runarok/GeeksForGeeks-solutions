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
        let n = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.countWays(n));
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @returns {number}
*/

class Solution {
    // Function to count the number of ways to reach the nth stair
    countWays(n) {
        let counter = 0; // Initialize the counter to keep track of valid quadruplets
  
        // Loop through all possible quadruplets of stairs (i, j, k, l)
        // Increment counter when the sum of the quadruplet equals n
        for (let i = 1; i < n; i++) 
            for (let j = i; j < n; j++) 
                for (let k = j; k < n; k++) 
                    for (let l = k; l < n; l++) 
                        if (i + j + k + l == n) 
                            counter++;  // Valid quadruplet found, so increment counter
        
        return counter;  // Return the final count of valid ways
    }
}
