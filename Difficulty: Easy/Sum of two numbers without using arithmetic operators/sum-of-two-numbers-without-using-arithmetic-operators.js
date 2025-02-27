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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let a = input_ar0[0];
        let b = input_ar0[1];
        let obj = new Solution();
        let res = obj.sum(a,b);
        console.log(res);
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
*/

class Solution {
    
    sum(a, b) {
        // Loop until there is no carry left to add
        while (b !== 0) {
            // Calculate the carry (common set bits of a and b) and shift left by 1
            let carry = (a & b) << 1;
            
            // Add numbers without carry (bitwise XOR gives sum without carry)
            a = a ^ b;
            
            // Assign carry to b to add in the next iteration
            b = carry;
        }
        return a;  // Final sum after all carries are processed
    }
}
