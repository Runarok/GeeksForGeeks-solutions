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
        let arr=readLine().trim().split(" ").map((x) => parseInt(x));
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.smallerThanX(arr,n,x);
        if(res == -0){
            res = 0;
        }
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number[]} arr - Array of numbers
 * @param {number} n - Length of the array
 * @param {number} x - The value to compare against
 * @return {number} - Count of elements in the array that are smaller than x
 */

class Solution {
    // Function to count the number of elements smaller than x in the array
    smallerThanX(arr, n, x) {
       // Variable to store the count of elements smaller than x
       let result = 0;

       // Iterate through the array to check each element
       for (let i = 0; i < arr.length; i++) {
           // If the current element is smaller than x, increment the result count
           if (arr[i] < x) {
               result++;
           }
       }

       // Return the count of elements smaller than x
       return result;
    }
}
