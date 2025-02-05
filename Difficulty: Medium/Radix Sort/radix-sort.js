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
        obj.radixSort(arr, n);
        printList(arr, arr.length);
        
    
console.log("~");
}
}// } Driver Code Ends

// } Driver Code Ends

//User function Template for JavaScript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    // Function to implement Radix Sort
    radixSort(arr, n) {
        
        // Function to perform counting sort based on the current digit (exp)
        function countingSort(arr, exp) {
            const output = new Array(n);  // Array to hold the sorted numbers
            const count = new Array(10).fill(0);  // Array to store the count of each digit (0-9)
            
            // Count the occurrences of digits at the current place value (exp)
            for (let i = 0; i < n; i++) {
                const index = Math.floor(arr[i] / exp) % 10;  // Get the current digit
                count[index]++;  // Increment the count for that digit
            }
            
            // Modify the count array to store the actual positions of digits
            for (let i = 1; i < 10; i++) {
                count[i] += count[i - 1];  // Cumulative count
            }
            
            // Build the output array by placing elements in their sorted positions
            for (let i = n - 1; i >= 0; i--) {
                const index = Math.floor(arr[i] / exp) % 10;  // Get the current digit
                output[count[index] - 1] = arr[i];  // Place the element in the correct position
                count[index]--;  // Decrement the count
            }
            
            // Copy the sorted elements back to the original array
            for (let i = 0; i < n; i++) {
                arr[i] = output[i];  // Update the original array with sorted elements
            }
        }

        // Find the maximum number in the array to determine the number of digits
        const max = Math.max(...arr);
        
        // Perform counting sort for every digit (starting from the least significant digit)
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            countingSort(arr, exp);  // Sort based on the current digit place (exp)
        }
    }
}
