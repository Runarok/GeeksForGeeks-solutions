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
        let S = String(readLine());
        let obj = new Solution();
        console.log(obj.findDays(S));
        
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} S
 * @returns {number}
*/

class Solution {
    //Function to find the number of days since 1st January of the given year.
    findDays(S) {
        // Variable to track the maximum consecutive dots encountered
        let maxDots = 0;
        
        // Variable to count the current streak of consecutive dots
        let currentDots = 0;
        
        // Variable to count the number of "days" (segments that exceed previous maxDots)
        let days = 0;

        // Loop through each character in the string S
        for (let i = 0; i < S.length; i++) {
            if (S[i] == ".") {
                // If current character is a dot, increase the current streak
                currentDots++;
            } else {
                // If it's not a dot (some other character), check if the current streak
                // of dots is the longest seen so far
                if (currentDots > maxDots) {
                    // Increment days since a new max was reached
                    days++;
                    // Update maxDots to the new longest streak
                    maxDots = currentDots;
                }
                // Reset current dot streak for the next segment
                currentDots = 0;
            }
        }

        // Return the total number of qualifying "days"
        return days;
    }
}
