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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let k = parseInt(readLine());
        let obj = new Solution();
        let res = obj.countKdivPairs(arr, n, k);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - Input array of integers
 * @param {number} n - Size of the array
 * @param {number} k - Divisor for pair sum divisibility check
 * @returns {number} - Count of valid pairs whose sum is divisible by k
 */

class Solution {
    countKdivPairs(arr, n, k) {
        let pairCount = 0;  // Stores the count of valid pairs
        let remainderMap = {}; // Stores the frequency of remainders

        // Iterate through the array to compute remainders and count valid pairs
        for (let i = 0; i < n; i++) {
            let remainder = arr[i] % k; // Compute remainder when divided by k
            
            if (remainder === 0) {
                // If remainder is 0, check if we have seen other elements with remainder 0
                if (remainderMap[remainder]) {
                    pairCount += remainderMap[remainder];
                }
            } else {
                // Check if there exists a complement remainder (k - remainder) in the map
                if (remainderMap[k - remainder]) {
                    pairCount += remainderMap[k - remainder];
                }
            }

            // Store/update the frequency of the current remainder
            remainderMap[remainder] = (remainderMap[remainder] || 0) + 1;
        }

        return pairCount; // Return the total count of valid pairs
    }
}
