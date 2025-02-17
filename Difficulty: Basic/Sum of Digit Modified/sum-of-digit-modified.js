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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.isMagic(N);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} N
 * @returns {boolean}
*/

class Solution {
    // Function to check whether a number is a magic number or not.
    isMagic(N) {
        // Initial number is set to N
        let num = N;

        // Keep summing the digits until num becomes a single digit
        while (num > 9) {
            let str = num.toString(); // Convert the number to string for easy iteration
            num = 0; // Reset num to 0 to start summing digits
            for (const ch of str) {
                num += parseInt(ch); // Sum each digit
            }
        }

        // If the resulting single digit is 1, it's a magic number
        return num === 1 ? 1 : 0;
    }
}
