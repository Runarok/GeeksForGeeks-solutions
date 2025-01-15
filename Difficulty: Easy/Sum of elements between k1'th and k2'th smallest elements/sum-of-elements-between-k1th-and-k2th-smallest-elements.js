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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let [k1,k2] = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.sumBetweenTwoKth(arr,n,k1,k2);
        if(res===-0){
            res = 0;
        }
        console.log(res.toString());
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k1
 * @param {number} k2
 * @return {number}
*/

class Solution {
    sumBetweenTwoKth(A, N, K1, K2) {
        // Sort the array to find the K1th and K2th smallest elements
        A.sort((a, b) => a - b);
        
        let sum = 0;
        
        // Iterate from the K1th element to the (K2-1)th element (1-based index)
        for (let i = K1; i < K2 - 1; i++) {
            sum += A[i];
        }
        
        return sum;
    }
}
