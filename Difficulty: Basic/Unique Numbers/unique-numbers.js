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
        let L = input_ar1[0];
        let R = input_ar1[1];
        let obj = new Solution();
        let res = obj.uniqueNumbers(L, R);
        printList(res, res.length);
        
    }
}// } Driver Code Ends



// } Driver Code Ends

class Solution {
    /**
     * Function to find all unique numbers in the given range [L, R]
     * @param {number} L - Lower bound of the range
     * @param {number} R - Upper bound of the range
     * @returns {number[]} - Array containing all unique numbers in the range
     */
    uniqueNumbers(L, R) {
        let result = []; // Array to store unique numbers

        // Loop through all numbers from L to R
        for (let i = L; i <= R; i++) {
            let digits = {}; // Object to track digit occurrences
            let isUnique = true; // Flag to check if the number is unique
            let numString = i.toString(); // Convert number to string to check digits

            // Check if all digits in the number are unique
            for (let j = 0; j < numString.length; j++) {
                if (digits[numString[j]] === undefined) {
                    digits[numString[j]] = 1; // Mark the digit as seen
                } else {
                    isUnique = false; // Mark as non-unique if duplicate digit found
                    break; // Exit loop if a duplicate is found
                }
            }

            // If the number has all unique digits, add it to the result
            if (isUnique) {
                result.push(i);
            }
        }

        return result; // Return the array of unique numbers
    }
}
