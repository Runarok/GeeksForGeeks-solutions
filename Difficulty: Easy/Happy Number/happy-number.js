//{ Driver Code Starts
//Initial Template for javascript

// Sample Input:
// 1
// 19

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

function printList(res, n) {
    let s = '';
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.isHappy(N);
        if(res){
            console.log("1");
        } else {
            console.log("0");
        }
    
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript
/**
 * @param {number} N
 * @returns {boolean}
*/

class Solution {
    // Helper function to calculate the sum of squares of digits of a number.
    getNewNum(number) {
        let sumOfSquares = 0;
        let numberStr = number.toString();
        
        for (let i = 0; i < numberStr.length; i++) {
            let digit = Number(numberStr[i]);
            sumOfSquares += digit * digit;
        }
        
        return sumOfSquares;
    }

    // Function to check whether the number is a happy number or not.
    isHappy(N) {
        let slowPointer = N;  // Moves one step at a time.
        let fastPointer = this.getNewNum(N);  // Moves two steps at a time.

        // Using Floyd’s Cycle Detection Algorithm to detect cycle.
        while (fastPointer !== 1 && slowPointer !== fastPointer) {
            slowPointer = this.getNewNum(slowPointer);
            fastPointer = this.getNewNum(this.getNewNum(fastPointer));
        }

        // If fastPointer reaches 1, it’s a happy number.
        if (fastPointer === 1) {
            return true;
        } else {
            return false;
        }
    }
}
