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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let S = readLine();
        let obj = new Solution();
        let res = obj.buildLowestNumber(S,n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {string} num
 * @param {number} k
 * @returns {string}
 */

class Solution {
    // Function to build the lowest possible number by removing k digits from num
    buildLowestNumber(num, k) {
        let stack = []; // Stack to store the digits of the resulting number
        
        // Iterate through each digit in the input number
        for (let digit of num) {
            // While there are digits left to remove and the last digit in the stack is larger than the current digit
            while (k > 0 && stack.length && stack[stack.length - 1] > digit) {
                stack.pop(); // Remove the last digit from the stack
                k--; // Decrease the number of digits to remove
            }
            stack.push(digit); // Add the current digit to the stack
        }
        
        // If there are any digits left to remove, remove them from the end of the stack
        while (k > 0) {
            stack.pop();
            k--; // Decrease the number of digits to remove
        }
        
        // Convert the stack to a string and remove any leading zeros
        let result = stack.join('').replace(/^0+/, '');
        
        // If the result is empty, return '0' (case where the number becomes zero)
        return result.length ? result : '0';
    }
}
