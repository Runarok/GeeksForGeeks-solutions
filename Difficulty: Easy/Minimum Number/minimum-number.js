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
        let n = parseInt(readLine());
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.minimumNumber(n,arr);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    // Function to find minimum number of elements to be inserted in the array
    minimumNumber(n, arr) {
        // Sort the array to check the differences between consecutive elements
        arr.sort((a, b) => a - b);
        
        let minDifference = arr[n - 1];  // Start with the largest difference
        
        // Loop through the array to find the minimum difference between consecutive elements
        for (let i = 0; i < n - 1; i++) {
            if (minDifference > arr[i + 1] - arr[i] && arr[i + 1] !== arr[i]) {
                minDifference = arr[i + 1] - arr[i];
            }
            // If the minimum difference is 1, no insertion is required
            if (minDifference === 1) {
                return 1;
            }
        }
    }
}
