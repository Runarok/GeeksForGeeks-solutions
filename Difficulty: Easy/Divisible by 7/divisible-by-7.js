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
        let str = readLine();
        let obje = new Solution();
        let res = obje.isdivisible7(str);
        if(res === true)
            console.log("1");
        else
            console.log("0");
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} num
 * @returns {boolean}
*/

class Solution {
    // Function to check whether the given number (as a string) is divisible by 7.
    isdivisible7(num) {
        // Initialize remainder
        let remainder = 0;

        // Iterate through each digit of the number
        for (let i = 0; i < num.length; i++) {
            // Update remainder using the current digit
            remainder = (remainder * 10 + parseInt(num[i])) % 7;
        }

        // If remainder is zero, the number is divisible by 7
        return remainder === 0 ? true : false;
    }
}
