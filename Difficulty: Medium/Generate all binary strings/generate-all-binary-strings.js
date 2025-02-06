//{ Driver Code Starts
//Initial Template for javascript

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


function printArray(res,n){
    let s='';
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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let obj = new Solution();
        let res = obj.generateBinaryStrings(n); 
        printArray(res, res.length);
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {number} n - Number of bits in the binary strings.
 * @returns {string[]} - An array of binary strings with n bits.
 */

class Solution {
    // Function to generate all binary strings of n bits
    generateBinaryStrings(k) {
        // Helper function to recursively generate binary strings
        const solve = (k, ans, temp) => {
            if (!k) {
                // When no more bits to add, push the binary string to the result
                ans.push(temp.join(''));
                return;
            }

            // Choose 0 and recurse
            solve(k - 1, ans, [...temp, 0]);

            // Choose 1 only if the last bit added is not 1 or if it's the first bit
            if (temp[temp.length - 1] === 0 || temp.length === 0)
                solve(k - 1, ans, [...temp, 1]);

            return;
        };

        let ans = [];  // Array to store the resulting binary strings
        solve(k, ans, []);  // Start the recursion with an empty string
        return ans;  // Return the list of generated binary strings
    }
}
