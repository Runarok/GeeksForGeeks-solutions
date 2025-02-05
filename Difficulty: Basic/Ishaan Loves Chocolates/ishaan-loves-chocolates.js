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
        let res = obj.chocolates(arr, n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


/**
 * Function to find the last chocolate in the array where chocolates are picked
 * alternatively from either end of the array.
 *
 * @param {number[]} arr - Array of integers representing chocolates.
 * @param {number} n - The number of chocolates in the array.
 * @returns {number} - The last remaining chocolate after picking alternately from both ends.
 */

class Solution{
    chocolates(arr, n){
        let leftPointer = 0; // Pointer to the left end of the array
        let rightPointer = arr.length - 1; // Pointer to the right end of the array
        
        // Loop until both pointers cross each other
        while(leftPointer < rightPointer){
            // If the chocolate at the left pointer is greater, move the left pointer to the right
            if(arr[leftPointer] > arr[rightPointer]){
                leftPointer++;
            } 
            // Otherwise, move the right pointer to the left
            else{
                rightPointer--;
            }
        }
        
        // Return the chocolate at the position of the right pointer (the last one left)
        return arr[rightPointer];
    }
}
