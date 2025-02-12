//{ Driver Code Starts
// Initial Template for javascript
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
    for(; i<t; i++) {
        //reading size of array
        let n = parseInt(readLine());
        let arr = new Array(n);
        
        //inserting elements in the array
        let a = readLine().trim().split(" ").map((x) => parseInt(x));
        for(let i=0; i<n; i++) arr[i] = a[i];
        let obj = new Solution();
        let res = obj.maxDistance(arr, n);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution {
    // Function to find the maximum difference of absolute values of elements and indexes.
    maxDistance(arr, n) {
        let max1 = -Infinity, min1 = Infinity; // Variables to track max and min for (arr[i] + i)
        let max2 = -Infinity, min2 = Infinity; // Variables to track max and min for (arr[i] - i)
        
        for (let i = 0; i < n; i++) {
            // Update max and min for arr[i] + i
            max1 = Math.max(max1, arr[i] + i);
            min1 = Math.min(min1, arr[i] + i);
            
            // Update max and min for arr[i] - i
            max2 = Math.max(max2, arr[i] - i);
            min2 = Math.min(min2, arr[i] - i);
        }
        
        // Return the maximum difference between (arr[i] + i) and (arr[i] - i)
        return Math.max(max1 - min1, max2 - min2);
    }
}
