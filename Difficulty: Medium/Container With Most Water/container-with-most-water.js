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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(
            x => parseInt(x)); // Read and split input into an array
        let obj = new Solution();
        console.log(obj.maxWater(arr)); // Use the array directly

        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    maxWater(arr) {
        let left = 0;
        let right = arr.length - 1;
        let maxArea = 0;
        
        while (left < right) {
            // Calculate the area between the left and right lines
            let height = Math.min(arr[left], arr[right]);
            let width = right - left;
            let area = height * width;
            
            // Update maxArea if the current area is larger
            maxArea = Math.max(maxArea, area);
            
            // Move the pointer pointing to the shorter line
            if (arr[left] < arr[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea;
    }
}
