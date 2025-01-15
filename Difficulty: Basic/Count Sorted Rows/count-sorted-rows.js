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
        let N = input_ar0[0];
        let M = input_ar0[1];
        let Mat = new Array(N);
        for(let i=0;i<N;i++)
        {
            let a = new Array(M);
            let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
            for(let j=0;j<M;j++)
                a[j] = input_ar1[j];
            Mat[i] = a;
        }
        let obj = new Solution();
        let ans=obj.sortedCount(N, M, Mat);
        if(ans==-0)
        ans=0;
        console.log(ans);
        
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number} M
 * @param {number[][]} Mat
 * @returns {number[]}
*/

class Solution {
    // Function to count all rows that are sorted in strictly increasing or strictly decreasing order
    sortedCount(N, M, Mat) {
        let count = 0;

        // Loop through each row in the matrix
        for (let i = 0; i < N; i++) {
            let isIncreasing = true;
            let isDecreasing = true;

            // Check if the row is strictly increasing or strictly decreasing
            for (let j = 1; j < M; j++) {
                if (Mat[i][j] <= Mat[i][j - 1]) {
                    isIncreasing = false;
                }
                if (Mat[i][j] >= Mat[i][j - 1]) {
                    isDecreasing = false;
                }
            }

            // If the row is either strictly increasing or strictly decreasing
            if (isIncreasing || isDecreasing) {
                count++;
            }
        }

        return count;
    }
}
