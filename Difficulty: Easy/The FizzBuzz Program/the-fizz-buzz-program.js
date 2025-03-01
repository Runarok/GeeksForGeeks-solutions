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
    for(; i<t; i++) {
        let a = parseInt(readLine());
        let obj = new Solution();
        obj.fizzBuzz(a);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

class Solution {
    fizzBuzz(number) {
        // Check if number is divisible by both 3 and 5, return "FizzBuzz"
        // If divisible by 3, return "Fizz"
        // If divisible by 5, return "Buzz"
        // Otherwise, return the number itself
        const result = number % 3 == 0 && number % 5 == 0 ? "FizzBuzz" :
                       number % 3 == 0 ? "Fizz" :
                       number % 5 == 0 ? "Buzz" :
                       number;
        
        // Print the result
        console.log(result);
    }
}
