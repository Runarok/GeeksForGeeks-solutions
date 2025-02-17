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
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.is_StrongNumber(n);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} n
 * @return {number}
 */
class Solution {
    is_StrongNumber(n) {
        // code here
        var digits = [];
        var sum = 0;
        var fact = 1;
        var str = n.toString(); // Convert number to string for digit iteration
        for (var i = 0; i < str.length; i++) {
            digits.push(Number(str[i])); // Push each digit to the digits array
            // Calculate the factorial of each digit
            for (var j = 1; j <= digits[i]; j++) {
                fact *= j;
            }
            sum += fact; // Add factorial to the sum
            fact = 1; // Reset factorial for the next digit
        }
        // Check if the sum is equal to the original number
        if (n == sum) return 1; 
        return 0; // Return 0 if not a strong number
    }
}
