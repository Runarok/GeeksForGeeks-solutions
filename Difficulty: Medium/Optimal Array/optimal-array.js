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
        let obj = new Solution();
        let res = obj.optimalArray(n, arr);
        printList(res,res.length);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @class Solution
 * Implements methods to compute the optimal array based on the given conditions.
 */

class Solution {
    /**
     * getMedian
     * Returns the median of a sorted array.
     * 
     * @param {number[]} a - The sorted array.
     * @returns {number} - The median of the array.
     */
    getMedian(a) {
        const len = a.length;
        return len % 2 === 0 ? a[Math.floor(len / 2) - 1] : a[Math.floor(len / 2)];
    }

    /**
     * optimalArray
     * Computes the optimal array based on the median difference.
     * 
     * @param {number} n - The size of the array.
     * @param {number[]} a - The given sorted array.
     * @returns {number[]} - The result array containing cumulative sum of differences.
     */
    optimalArray(n, a) {
        let answer = [];
        let prefixSum = 0;

        for (let i = 0; i < n; i++) {
            // Find the expected median for the current subarray [0...i]
            const median = i % 2 === 0 ? a[Math.floor(i / 2)] : a[Math.floor(i / 2)];
            
            // Compute and accumulate the absolute difference
            prefixSum += Math.abs(a[i] - median);
            answer.push(prefixSum);
        }

        return answer;
    }
}
