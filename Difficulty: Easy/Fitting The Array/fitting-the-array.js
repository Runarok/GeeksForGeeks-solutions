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
        let brr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            brr[i] = input_ar2[i];
        }
        let obj = new Solution();
        let res = obj.isFit(arr, brr, n);
        if(res == true){
            console.log("YES");
        } else {
            console.log("NO");
        }
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

// User function Template for JavaScript

/**
 * @param {number[]} arr - The first array representing heights or some measure.
 * @param {number[]} brr - The second array representing another set of heights or measures.
 * @param {number} n - The length of both arrays (assumed to be the same for both arrays).
 * @returns {number} - Returns 1 if the elements in 'arr' can be matched with 'brr' in a non-decreasing order, otherwise returns 0.
 */
class Solution {
    // Function to check if the elements from two arrays can be matched in non-decreasing order.
    isFit(arr, brr, n) {
        // Sort both arrays in ascending order
        let sortedArr = arr.sort((a, b) => a - b);
        let sortedBrr = brr.sort((a, b) => a - b);
        
        // Iterate through the sorted arrays to compare elements at each position
        for (let i = 0; i < n; i++) {
            // If the element in the first array is greater than the corresponding element in the second array, return false
            if (sortedArr[i] > sortedBrr[i]) {
                return false;
            }
        }
        
        // If no mismatch is found, return true
        return true;
    }
}
