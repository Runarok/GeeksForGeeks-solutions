//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res, n) {
    let s = "";
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
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.armstrongNumber(n);
        if (res) {
            console.log("true");
        } else {
            console.log("false");
        }

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @returns {boolean}
 */

class Solution {
    // Function to check if a number is an Armstrong number
    armstrongNumber(n) {
        // Convert the number to an array of its digits (as strings)
        let digits = Array.from(String(n));

        // Create an array of the cubes of each digit
        let cubes = [];
        digits.forEach((digit) => {
            cubes.push(Math.pow(Number(digit), 3));
        });

        // Sum up the cubes of the digits
        let sumOfCubes = cubes.reduce((acc, current) => acc + current, 0);
        
        // If the sum of the cubes equals the original number, return true
        if (sumOfCubes === n) {
            return true;
        }

        // Otherwise, return false
        return false;
    }
}
