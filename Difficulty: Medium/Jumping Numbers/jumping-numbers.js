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
        let X = parseInt(readLine());
        let obj = new Solution();
        let res = obj.jumpingNums(X)
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} X
 * @returns {string}
*/

class Solution
{
    // Function to check whether the given number is a jumping number or not.
    jumpingNums(X)
    {
        // If the number is a single digit, it's a jumping number by definition
        if (X < 10) return X;

        let largestJumpingNum = 0;  // Variable to track the largest jumping number

        let queue = [];  // Initialize the queue for BFS
        
        // Initialize the queue with single-digit numbers (1-9)
        for (let i = 1; i <= 9; i++) {
            queue.push(i);
        }

        // Perform BFS to generate jumping numbers
        while (queue.length > 0) {
            let num = queue.shift();  // Get the current number from the queue

            // If the number is within the limit, update largestJumpingNum
            if (num <= X) {
                largestJumpingNum = Math.max(largestJumpingNum, num);

                let lastDigit = num % 10;  // Get the last digit of the current number

                // Generate next possible numbers based on last digit
                // Case when last digit > 0, can go to num - 1
                if (lastDigit > 0) {
                    let nextNum = num * 10 + (lastDigit - 1);
                    if (nextNum <= X) queue.push(nextNum);  // Add next number to queue if it's valid
                }

                // Case when last digit < 9, can go to num + 1
                if (lastDigit < 9) {
                    let nextNum = num * 10 + (lastDigit + 1);
                    if (nextNum <= X) queue.push(nextNum);  // Add next number to queue if it's valid
                }
            }
        }

        // Return the largest jumping number found
        return largestJumpingNum;
    }
}
