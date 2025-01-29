//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
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
    let N = parseInt(readLine());
    let obj = new Solution();
    let res = obj.nextHappy(N);
    console.log(res);
  
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
 */

class Solution {
  nextHappy(N) {
    // Helper function to calculate the next number by summing the squares of the digits
    const getNextNum = (num) => {
        const digits = [...num.toString()].map(Number);  // Convert the number to an array of its digits
        
        let newNum = 0;
        // Iterate over each digit and sum the squares of the digits
        for (let i = 0; i < digits.length; i++) {
            const digit = digits[i];
            newNum += digit ** 2;  // Add the square of the current digit to newNum
        }
        
        return newNum;  // Return the new number obtained by summing the squares of digits
    }
    
    // Helper function to check if a number is happy
    const checkIfHappy = (num) => {
        let obj = {};  // Object to store numbers we've encountered to detect cycles
        while (num !== 1 && !obj[num]) {  // Continue until num is 1 or we encounter a cycle
            obj[num] = true;  // Mark this number as seen
            num = getNextNum(num);  // Get the next number in the sequence
        }
        return num === 1;  // Return true if the number is 1 (happy number)
    }
    
    let isHappy = false;
    // Loop to find the next happy number greater than N
    while (!isHappy) {
        isHappy = checkIfHappy(++N);  // Increment N and check if it's happy
    }
    
    return N;  // Return the next happy number
  }
}
