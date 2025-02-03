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

function takeInput()
{
    let n = readLine().split(" ").map((x) => parseInt(x));
    let a1 = new Array(n[0]);
    let a2 = new Array(n[1]);
    let a3 = new Array(n[2]);
    let input_ar1 = readLine().split(" ").map((x) => parseInt(x));
    for(let i=0;i<n[0];i++)
        a1[i] = input_ar1[i];
    let input_ar2 = readLine().split(" ").map((x) => parseInt(x));
    for(let i=0;i<n[1];i++)
        a2[i] = input_ar2[i];
    let input_ar3 = readLine().split(" ").map((x) => parseInt(x));
    for(let i=0;i<n[2];i++)
        a3[i] = input_ar3[i];
    return { n, a1, a2, a3};
}


function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let {n , a1 , a2, a3} = takeInput();
        let obj = new Solution();
        let res = obj.maxSum(n[0],n[1],n[2],a1,a2,a3);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number} N1
 * @param {number} N2
 * @param {number} N3
 * @param {number[]} S1
 * @param {number[]} S2
 * @param {number[]} S3
 * @returns {number}
 */

class Solution {
    // Function to find maximum sum such that every index
    // includes only from one of the given three arrays.
    maxSum(N1, N2, N3, S1, S2, S3) {
        // Calculate the sum of all elements in each array
        let sum1 = S1.reduce((a, b) => a + b, 0);
        let sum2 = S2.reduce((a, b) => a + b, 0);
        let sum3 = S3.reduce((a, b) => a + b, 0);
        
        // Initialize indices for each array
        let i = 0;
        let j = 0;
        let k = 0;
        
        // Loop until one of the arrays is fully traversed
        while (i < N1 && j < N2 && k < N3) {
            // If the sums of all arrays are equal, return the sum
            if (sum1 === sum2 && sum2 === sum3) return sum1;
            
            // If sum1 is the largest, subtract the current element in S1 and move to the next element
            if (sum1 >= sum2 && sum1 >= sum3 && i < N1) {
                sum1 = sum1 - S1[i++];
            }
            // If sum2 is the largest, subtract the current element in S2 and move to the next element
            else if (sum2 >= sum1 && sum2 >= sum3 && j < N2) {
                sum2 = sum2 - S2[j++];
            }
            // If sum3 is the largest, subtract the current element in S3 and move to the next element
            else if (sum3 >= sum2 && sum3 >= sum1 && k < N3) {
                sum3 = sum3 - S3[k++];
            }
        }
        
        // If no solution, return 0
        return 0;
    }
}
