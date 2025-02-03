//{ Driver Code Starts
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

// Position this line where user code will be pasted.

function main() {
    let t = parseInt(readLine()); // Number of test cases
    while (t-- > 0) {
        let arr = readLine().split(' ').map(x => parseInt(x)); // Read the array
        let target = parseInt(readLine());                     // Read the target

        const sln = new Solution();
        const ans = sln.findTarget(arr, target);
        console.log(ans);
        console.log("~");
    }
}

// } Driver Code Ends

class Solution {
    // Function to find the target in the array
    findTarget(arr, target) {
        let left = 0; // Left pointer of the array
        let right = arr.length - 1; // Right pointer of the array

        // Loop while left pointer is less than or equal to right pointer
        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2); // Calculate the mid index

            // If the mid element is the target, return the index
            if (arr[mid] === target) {
                return mid;
            } 
            // If the target is just left of mid, return its index
            else if (mid > 0 && arr[mid - 1] === target) {
                return mid - 1;
            } 
            // If the target is just right of mid, return its index
            else if (mid < arr.length - 1 && arr[mid + 1] === target) {
                return mid + 1;
            } 
            // If the mid element is greater than the target, adjust right pointer
            else if (mid > 1 && arr[mid] > target) {
                right = mid - 2;
            } 
            // Otherwise, adjust left pointer
            else if (mid < arr.length - 2) {
                left = mid + 2;
            } 
            else {
                break; // If no match is found, break out of the loop
            }
        }
        
        return -1; // Return -1 if the target is not found
    }
}
