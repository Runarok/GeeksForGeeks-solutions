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

function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.graycode(n);
        printArray(res,res.length);
        
    
console.log("~");
}
}


// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number} n - The number of bits in the Gray code sequence.
 * @returns {number[]} - The Gray code sequence of n bits.
 */

class Solution {
    // Function to generate the Gray code sequence for a given number of bits (n)
    graycode(n) {
        // Recursive function to generate the Gray code for n bits
        function code(n) {
            if (n === 0) {
                return ["0"];  // Base case: 0 bits, only "0"
            }
            if (n === 1) {
                return ["0", "1"];  // Base case: 1 bit, "0" and "1"
            }

            // Get the Gray code for (n-1) bits
            const code1 = code(n - 1);
            let result = [];

            // First half: prepend '0' to each element of code1
            for (let i = 0; i < code1.length; i++) {
                result[i] = "0" + code1[i];
            }

            // Second half: prepend '1' to each element of code1, but in reverse order
            for (let i = 0; i < code1.length; i++) {
                result[2 ** n - 1 - i] = "1" + code1[i];
            }

            return result;
        }

        // Call the recursive code function and return the result
        return code(n);
    }
}
