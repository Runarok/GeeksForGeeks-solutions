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
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.twoOddNum(arr, n);
        let s = "";
        for(let it = 0; it < res.length; it++){
            s+=res[it];
            s+=" ";
        }
        console.log(s);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} Arr
 * @param {number} N
 * @returns {number[]}
 */

// Function to find the position of the rightmost set bit (1) in a number
function rightmostBit(n){
    // Initialize position and bit mask
    let position = 0, m = 1;
    
    // Find the position of the rightmost 1 bit
    while ((n & m) == 0) {
        m = m << 1;
        position++;
    }
    return position;
}

class Solution {
    // Function to find two odd occurring numbers in an array.
    twoOddNum(arr, n) {
        // Variable to store the XOR result of all elements
        let result = 0, ans = [];
        
        // XOR all elements in the array
        arr.forEach(no => {
            result = result ^ no;
        });

        // Find the position of the rightmost set bit
        let pos = rightmostBit(result);

        // Initialize variables a and b for the two odd occurring numbers
        let a = result, b = result;

        // Iterate through the array to segregate elements into two groups
        arr.forEach((no) => {
            // Group numbers based on the rightmost bit
            if (no & (1 << pos)) {
                // If the bit is set, XOR with a
                a = a ^ no;
            } else {
                // If the bit is not set, XOR with b
                b = b ^ no;
            }
        });

        // Ensure the smaller number comes first in the result
        a < b ? ans.push(b, a) : ans.push(a, b);

        return ans;
    }
}
