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
        let arr = Array.from(readLine().trim().split(" "), (x) => parseInt(x));
        let obj = new Solution();
        let res = obj.countSpecialNumbers(N, arr);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number} N
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to count the special numbers in the given list.
    countSpecialNumbers(N, arr) {
        // Create an array to store frequency of each number
        let freq = new Array(Math.max(...arr) + 1).fill(0);
        
        // Count the frequency of each number in the array
        for (let i = 0; i < N; i++) {
            freq[arr[i]]++;
        }

        let count = 0;
        
        // Iterate through each number in the array
        for (let i = 0; i < N; i++) {
            // Check if the number is special based on its frequency
            if (freq[1] >= 1 && arr[i] !== 1) {
                count++;
            } else if (freq[1] > 1 && arr[i] === 1) {
                count++;
            } else if (freq[arr[i]] > 1) {
                count++;
            } else {
                // Check if any divisor of arr[i] exists in the array
                for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                    if (arr[i] % j === 0) {
                        // If j is a divisor, check its frequency
                        if (freq[j] >= 1) {
                            count++;
                            break;
                        }
                        let x = arr[i] / j;
                        // Check if the complementary divisor x has a frequency
                        if (freq[x] >= 1) {
                            count++;
                            break;
                        }
                    }
                }
            }
        }

        return count;
    }
}
