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
        let arr = new Array(sizeOfArray);
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<sizeOfArray-1;i++)
            arr[i] = input_ar[i];
        input_ar = readLine().split(' ').map(x=>parseInt(x));
        let index = input_ar[0];
        let element = input_ar[1];
        let obj = new Solution();
        obj.insertAtIndex(arr, sizeOfArray, index, element);
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

// User function Template for javascript

// You need to insert the given element at the given index. 
// After inserting the elements at index, elements
// from index onward should be shifted one position ahead
// You may assume that the array already has sizeOfArray - 1
// elements.

/**
 * @param {number[]} arr
 * @param {number} sizeOfArray
 * @param {number} index
 * @param {number} element
 */
class Solution {
    // Function to insert an element at the specified index in the array
    insertAtIndex(arr, sizeOfArray, index, element) {
        // Use splice to insert the element at the given index
        // The second argument 0 ensures no elements are removed, only insertion occurs
        arr.splice(index, 0, element);
    }
}
