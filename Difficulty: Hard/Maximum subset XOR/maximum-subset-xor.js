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
        let N = parseInt(readLine());
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        let arr = new Array(N);
        for(let i=0;i<N;i++)
            arr[i] = input_ar[i];
        let obj = new Solution();
        let ans=obj.maxSubsetXOR(arr, N);
        if(ans==-0)
        ans=0;
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/
class Solution {
    maxSubsetXOR(arr, n) {
        // To store the maximum subset XOR
        const basis = new Array(32).fill(0);  // There are at most 32 bits in the largest number (<= 10^6)

        // Construct the basis
        for (let num of arr) {
            for (let i = 31; i >= 0; i--) {
                if ((num >> i) & 1) {  // Check if the i-th bit of num is 1
                    if (basis[i] === 0) {  // If no basis for this bit
                        basis[i] = num;  // Set the current number as the basis for this bit
                        break;
                    } else {
                        num ^= basis[i];  // Reduce the number by XORing with the basis
                    }
                }
            }
        }

        // Calculate the maximum XOR using the basis
        let maxXor = 0;
        for (let i = 31; i >= 0; i--) {
            if ((maxXor ^ basis[i]) > maxXor) {
                maxXor ^= basis[i];  // Maximize the XOR value by including this basis element
            }
        }

        return maxXor;
    }
}
