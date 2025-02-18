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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let a = input_ar1[0];
        let b = input_ar1[1];
        let obj = new Solution();
        let res = obj.numOfPerfectSquares(a, b);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

class Solution {
    // Function to count how many perfect squares exist between a and b (inclusive)
    numOfPerfectSquares(a, b) {
        let counter = 0;
        // Looping through each number in the range [a, b]
        for (let i = a; i <= b; i++) {
            // Checking if the number is a perfect square
            let isPerfectSquare = this.perfectSquares(i);
            if (isPerfectSquare) {
                counter++;  // Increment counter if it is a perfect square
            }
        }
        return counter;  // Return the count of perfect squares
    }

    // Helper function to check if a number is a perfect square
    perfectSquares(num) {
        let sqrtValue = Math.sqrt(num);  // Find the square root of the number
        return Number.isInteger(sqrtValue);  // Return true if it's an integer (perfect square)
    }
}
