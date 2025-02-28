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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);
        
        let arr = new Array(n);
        input_line = readLine().split(' ');
        for(let i=0;i<n;i++)
            arr[i] = parseInt(input_line[i]);
            
        let brr = new Array(m);
        input_line = readLine().split(' ');
        for(let i=0;i<m;i++)
            brr[i] = parseInt(input_line[i]);
        
        let x = parseInt(readLine());
        let obj = new Solution();
        let ans = obj.printClosest(arr, brr, n, m, x);
        console.log(Math.abs(ans[0]+ans[1] - x));
    
console.log("~");
}
}
// } Driver Code Ends

class Solution {
    /**
     * @param {number[]} arr
     * @param {number[]} brr
     * @param {number} n
     * @param {number} m
     * @param {number} x
     * @returns {number[]}
     */

    // Function to print the pair of elements whose sum with x is closest to x
    printClosest(arr, brr, n, m, x) {
        let i = 0, j = brr.length - 1;  // Two pointers, one for each array
        let closestSum = Infinity;  // Initial value for closest sum
        let resultPair = [];  // To store the best pair of elements

        // Loop through both arrays
        while (i < arr.length && j >= 0) {
            let sum = arr[i] + brr[j];  // Calculate the current sum

            // If the current sum is closer to x, update the result pair
            if (Math.abs(sum - x) < Math.abs(closestSum - x)) {
                closestSum = sum;
                resultPair = [arr[i], brr[j]];
            }

            // Move the pointers based on the sum
            if (sum < x) {
                i++;  // Increment i to increase the sum
            } else {
                j--;  // Decrement j to decrease the sum
            }
        }

        // Return the pair whose sum is closest to x
        return resultPair;
    }
}
