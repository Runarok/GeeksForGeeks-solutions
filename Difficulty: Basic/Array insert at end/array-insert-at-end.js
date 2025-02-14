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
        let sizeOfArray = parseInt(readLine());
        let arr = [];
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<sizeOfArray-1;i++)
            arr.push(input_ar[i]);
        let element = parseInt(readLine());
        let obj = new Solution();
        obj.insertAtEnd(arr, sizeOfArray, element);
        let S = '';
        for(let i=0;i<sizeOfArray;i++)
        {
            S+=arr[i];
            S+=' ';
        }
        console.log(S);
        
    
console.log("~");
}
}
// } Driver Code Ends

// User function Template for JavaScript

// Inserts the given element at the end of the array
// Assumes the array has sizeOfArray - 1 elements initially

/**
 * @param {number[]} arr
 * @param {number} sizeOfArray
 * @param {number} element
 */
class Solution {
    insertAtEnd(arr, sizeOfArray, element) {
        // Insert the element at the last position if space is available
        if (arr.length < sizeOfArray) {
            arr[arr.length] = element;
        }
        return arr;
    }
}
