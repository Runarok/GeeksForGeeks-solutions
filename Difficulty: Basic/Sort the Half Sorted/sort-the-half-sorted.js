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
        obj.sortHalves(arr, n);
        printList(arr,n);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends

/**
 * Function to sort two halves of the array.
 * The first half of the array should be sorted, followed by the second half being sorted,
 * and then both halves are merged into the final sorted array.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @param {number} n - The number of elements in the array.
 * @returns {void} - The function sorts the array in-place, so no return value is needed.
 */

class Solution{
    sortHalves(arr, n){
        // Finding the point where the second half of the array starts
        let mid = 0;
        for (let i = 1; i < n; i++) {
            // Looking for the first element that is smaller than the previous one
            // This will determine the end of the first half and the start of the second half
            if (arr[i] < arr[i - 1]) {
                mid = i;
                break;
            }
        }

        let i = 0, j = mid; // 'i' for first half, 'j' for second half
        let result = []; // Array to store the merged sorted result
        
        // Merging both halves while comparing their elements
        while (i < mid && j < n) {
            if (arr[i] <= arr[j]) {
                result.push(arr[i++]); // Push from the first half if it is smaller or equal
            } else {
                result.push(arr[j++]); // Otherwise, push from the second half
            }
        }

        // If any elements remain in the second half, add them to the result
        while (j < n) {
            result.push(arr[j++]);
        }

        // If any elements remain in the first half, add them to the result
        while (i < mid) {
            result.push(arr[i++]);
        }

        // Copy the sorted result back to the original array
        for (let k = 0; k < n; k++) {
            arr[k] = result[k];
        }
    }
}
