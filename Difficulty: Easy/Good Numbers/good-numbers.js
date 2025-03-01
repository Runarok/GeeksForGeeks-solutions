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
        let L = parseInt(input_line[0]);
        let R = parseInt(input_line[1]);
        let D = parseInt(input_line[2]);
        
        
        let obj = new Solution();
        let ans = obj.goodNumbers(L, R, D);
        let s = "";
        for(let i of ans)
        {
            s += i + " ";
        }
        console.log(s);
        
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number} L
 * @param {number} R
 * @param {number} D
 * @returns {number}
 */

class Solution {
    // Function to find the number of good numbers between L and R.
    goodNumbers(L, R, D) {
        const res = [];
        
        // Iterate through all numbers in the range [L, R]
        for (let i = L; i <= R; i++) {
            // Check if the current number is a "good" number
            if (this.checkGood(i, D)) res.push(i);
        }
        
        // Return the array of good numbers
        return res;
    }

    // Function to check if a number is "good" based on the conditions
    checkGood(n, d) {
        let to = n % 10;  // Get the last digit of the number
        
        // If the last digit is equal to d, it's not a good number
        if (to == d) return false;

        n = Math.floor(n / 10);  // Remove the last digit of the number

        // Iterate through the remaining digits of the number
        while (n > 0) {
            const v = n % 10;  // Get the current digit
            if (v == d || v <= to) return false;  // Check if the digit is less than or equal to 'to' or equal to d
            
            to += v;  // Update 'to' by adding the current digit
            n = Math.floor(n / 10);  // Remove the last digit
        }

        // If all checks pass, the number is "good"
        return true;
    }
}
