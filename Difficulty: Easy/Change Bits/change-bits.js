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
    for (; i < t; i++) {
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.changeBits(N);
        console.log(res[0] + " " + res[1]);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} N
 * @return {number[]}
 */
class Solution {
    changeBits(N) {
        // Initialize an array to store the result
        let ans = [];
        
        // Calculate the number of bits required to represent N
        let count = Math.floor(Math.log(N) / Math.log(2)) + 1;
        
        // Copy the value of N to temp
        let temp = N;
        
        // Modify temp by setting all bits to 1 from the position of the highest bit in N
        for (let i = 0; i < count; i++) {
            temp = temp | (1 << i);  // Set the ith bit of temp to 1
        }
        
        // Store the difference between temp and N in ans[0]
        ans[0] = Math.abs(temp - N);
        
        // Store the modified number with all bits set to 1 in ans[1]
        ans[1] = temp;
        
        // Return the result array
        return ans;
    }
}
