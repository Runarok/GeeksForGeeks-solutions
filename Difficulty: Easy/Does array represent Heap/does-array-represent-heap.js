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
        let res = obj.isMaxHeap(n,arr);
        if(res === true){
            console.log(1);
        }
        else{
            console.log(0);
        }
        
    
console.log("~");
}
}// } Driver Code Ends




// } Driver Code Ends

// User function Template for javascript

/**
 * @param {number} n
 * @param {number[]} arr
 * @returns {bool}
 */

class Solution {
    isMaxHeap(n, arr) {
        // Iterate through the array up to half of its length, as the last level has no children
        for (let i = 0; i <= Math.floor(n / 2); i++) {
            // Check if the parent node is smaller than any of its children
            if (
                (2 * i + 1 < n && arr[i] < arr[2 * i + 1]) ||  // Left child exists and is greater than parent
                (2 * i + 2 < n && arr[i] < arr[2 * i + 2])      // Right child exists and is greater than parent
            ) {
                return false;  // If condition is true, the array doesn't represent a max heap
            }
        }
        return true;  // Return true if all conditions are satisfied, indicating it's a max heap
    }
}
