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
    s+=res[0];
    for(let i = 1;i<n;i++){
        s+=" "+res[i];
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let h1 = input_ar1[1];
        let h2 = input_ar1[2];
        let H = new Array(n);
        let A = new Array(n);
        for(let i=0;i<n;i++){
            let input_aro = readLine().split(' ').map(x=>parseInt(x));
            H[i] = input_aro[0];
            A[i] = input_aro[1];
        }
        let obj = new Solution();
        let res = obj.buzzTime(n, h1, h2, H, A);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function template for Javascript
/**
 * @param {number} N
 * @param {number} M
 * @param {number[]} L
 * @param {number[]} H
 * @param {number[][]} A
 * @returns {number}
*/

class Solution {
    /**
     * Function to calculate the minimum buzz time.
     * @param {number} N - The number of items.
     * @param {number} M - The required target sum.
     * @param {number} L - Lower limit for each item.
     * @param {number} H - Array containing the initial values of each item.
     * @param {number} A - Array containing the increment for each item per unit time.
     * @returns {number} - The minimum buzz time to reach or exceed target M.
     */
    buzzTime(N, M, L, H, A)
    {
       // Initialize the binary search range.
       let l = 0;
       let r = Math.max(M, L) + 1;
       let ans = 0;
       
       // Perform binary search to find the minimum buzz time.
       while (l <= r) {
           let ts = 0; // This will store the cumulative value during the process.
           let mid = l + Math.floor((r - l) / 2); // Calculate the middle point.
           
           // Loop through each item to check if the required value can be achieved.
           for (let i = 0; i < N; i++) {
               // If the item can contribute to the target (H[i] + A[i] * mid >= L), add its value.
               if (H[i] + A[i] * mid >= L) {
                   ts += H[i] + A[i] * mid;
                   // If the total sum reaches or exceeds M, break the loop.
                   if (ts >= M)
                       break;
               }
           }
           
           // If the total sum is greater than or equal to M, update the result and adjust the range.
           if (ts >= M) {
               ans = mid; // Store the current value of mid as the answer.
               r = mid - 1; // Try to find a smaller buzz time.
           } else {
               l = mid + 1; // If it's not sufficient, increase the time.
           }
       }
       
       return ans; // Return the calculated minimum buzz time.
    }
}
