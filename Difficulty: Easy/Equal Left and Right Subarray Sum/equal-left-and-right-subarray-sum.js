//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.equalSum(arr);
        console.log(res);

        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


class Solution {
    // Function to find equilibrium point in the array.
    equalSum(arr) {
        let totalSum = 0;
        let leftSum = 0;
        
        // Step 1: Calculate the total sum of the array
        for (let num of arr) {
            totalSum += num;
        }
        
        // Step 2: Traverse through the array to find the equilibrium point
        for (let i = 0; i < arr.length; i++) {
            // Subtract the current element from totalSum to get the right sum
            totalSum -= arr[i];
            
            // Check if left sum equals right sum
            if (leftSum === totalSum) {
                return i; // Found the equilibrium point at index i
            }
            
            // Update the left sum for the next iteration
            leftSum += arr[i];
        }
        
        // If no equilibrium point exists, return -1
        return -1;
    }
}
