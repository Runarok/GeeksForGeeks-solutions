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
        let n = parseInt(readLine());
        let arr =readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.gcd(arr,n);
        if(res === -0)
            res = 0;
        console.log(res);
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    // Function to compute the Greatest Common Divisor (GCD) of two numbers
    gcdTwoNumbers(num1, num2) {
        while (num2 !== 0) {
            let remainder = num1 % num2;
            num1 = num2;
            num2 = remainder;
        }
        return num1;
    }

    // Function to compute the GCD of an array of numbers
    gcd(arr, n) {
        let gcdResult = arr[0]; // Initialize with the first element of the array

        for (let i = 0; i < n; i++) {
            gcdResult = this.gcdTwoNumbers(gcdResult, arr[i]);
        }
        return gcdResult;
    }
}
