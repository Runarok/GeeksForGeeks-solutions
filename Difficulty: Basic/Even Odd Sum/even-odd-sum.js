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
        let Arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            Arr[i] = input_ar1[i];
        let obj = new Solution();
        let ans = obj.EvenOddSum(N, Arr);
        console.log(ans[0] + " " + ans[1]);
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} N
 * @param {number[]} Arr
 * @returns {number[]}
 */

class Solution {
    // Function to find sum of even and odd elements in an array
    EvenOddSum(N, Arr)
    {
        // Initialize variables to store sum of odd and even elements
        let even = 0;
        let odd = 0;
        
        // Loop through the array to calculate sum of odd and even indexed elements
        for (let i = 0; i < Arr.length; i++) {
            // Check if the index is even or odd
            if (i % 2 !== 0) {  // Odd index
                even += Arr[i];
            } else {  // Even index
                odd += Arr[i];
            }
        }
        
        // Return the results as an array with sums of odd and even indexed elements
        return [odd, even];
    }
}
