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
        let arr =  readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.closestToZero(arr,n);
        if(res === -0)
            res = 0;
        console.log(res);
        
    
console.log("~");
}
}
// } Driver Code Ends

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
*/

class Solution {
    // Function to find the pair of numbers whose sum is closest to zero.
    closestToZero(arr, n) {
        // Initialize the answer to a large value.
        let ans = Number.MAX_SAFE_INTEGER;
        
        // Two pointers approach: one starting from the beginning (i), and the other from the end (j)
        let i = 0;
        let j = n - 1;
        
        // Sort the array to use the two-pointer technique effectively.
        arr.sort((a, b) => a - b);
        
        // Loop until the two pointers meet.
        while (i < j) {
            // Calculate the sum of the current pair.
            const sum = arr[i] + arr[j];
            
            // Update the answer if the current sum is closer to zero.
            // If two sums are equally close to zero, choose the larger sum.
            if (Math.abs(sum) < Math.abs(ans) || (Math.abs(sum) === Math.abs(ans) && sum > ans)) {
                ans = sum;
            }
            
            // If the sum is negative, move the left pointer (i) to the right to increase the sum.
            if (sum < 0) {
                i++;
            } else {
                // If the sum is positive, move the right pointer (j) to the left to decrease the sum.
                j--;
            }
        }
        
        // Return the sum that is closest to zero.
        return ans;
    }
}
