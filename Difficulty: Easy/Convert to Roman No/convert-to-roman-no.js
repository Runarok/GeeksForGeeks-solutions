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

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
  
    let n = parseInt(readLine());
    let obj = new Solution();
    let res = obj.convertToRoman(n);
    
    console.log(res);

  
console.log("~");
}
}
// } Driver Code Ends

//User function Template for javascript

/**
 * @param {number} n
 * @returns {string}
 */

class Solution {
    convertToRoman(n) { 
        if (n < 1 || n > 3999) return NaN;  // Roman numerals are defined for 1 to 3999

        // Mapping of Roman numeral symbols for each place value (thousands, hundreds, tens, units)
        const romanSymbols = [
            { unit: 'M' },                                   // Thousands place
            { unit: 'C', middle: 'D', end: 'M' },            // Hundreds place
            { unit: 'X', middle: 'L', end: 'C' },            // Tens place
            { unit: 'I', middle: 'V', end: 'X' }             // Units place
        ];

        // Convert number to string, pad it to 4 digits (thousands, hundreds, tens, units)
        return n
            .toString()
            .padStart(4, '0')
            .split('')
            .map((digit) => parseInt(digit)) // Convert each character to integer
            .map((value, placeIndex) => {    // Map each digit to Roman numerals using correct place value
                const symbols = romanSymbols[placeIndex];
                
                if (value === 5) return symbols.middle;  // Directly middle symbol like 'V', 'L', 'D'
                
                if (value > 5) {                         // Numbers 6 to 9
                    return value === 9 
                        ? symbols.unit + symbols.end     // 9 -> 'IX', 'XC', etc.
                        : symbols.middle + symbols.unit.repeat(value - 5); // 6, 7, 8 -> 'VI', 'VII', etc.
                }
                
                return value === 4                        // Special case for 4 (IV, XL, CD)
                    ? symbols.unit + symbols.middle
                    : symbols.unit.repeat(value);        // 1, 2, 3 -> 'I', 'II', 'III', etc.
            })
            .join(''); // Combine all parts into final Roman numeral string
    }
}
