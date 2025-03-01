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
        let A = new Array(N);
        let input_ar = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<N;i++)
            A[i] = input_ar[i];
            
        let X= parseInt(readLine());
        let obj = new Solution();
        
        console.log(obj.leftIndex(N, A , X))
        
        
    
console.log("~");
}
}


// } Driver Code Ends

// User function Template for javascript

class Solution {
    // Function to find the left index (first occurrence) of X in the array
    leftIndex(N, arr, X) {
        let low = 0, high = N - 1;  // Initialize low and high for binary search
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);  // Find the middle index
            
            // If the middle element is equal to X, check for the first occurrence
            if (arr[mid] === X) {
                // Check if it's the first occurrence (leftmost position)
                if (arr[mid - 1] !== X) {
                    return mid;  // Return the left index
                } else {
                    high = mid - 1;  // Move left to find an earlier occurrence
                }
            }
            // If the middle element is greater than X, search in the left half
            else if (arr[mid] > X) {
                high = mid - 1;
            }
            // If the middle element is less than X, search in the right half
            else {
                low = mid + 1;
            }
        }
        
        return -1;  // Return -1 if X is not found
    }
}
