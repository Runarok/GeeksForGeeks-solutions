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
    for(let i=0;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let inputA = readLine().split(" ").map((x)=>parseInt(x));
        for(let j = 0;j < n;j++) arr[j] = inputA[j];
        let obj = new Solution();
        let res = obj.canRepresentBST(arr,n);
        console.log(res);
    
console.log("~");
}
}
// } Driver Code Ends


class Solution {
    constructor() {
        this.ind = 0;  // Initialize index
    }

    // Function to check if the array can represent a BST
    canRepresentBST(arr, N) {
        this.build(arr, -Infinity, Infinity);  // Call the build function with the full range
        return this.ind === N ? 1 : 0;  // Return 1 if index equals N (valid BST), else return 0
    }

    // Function to recursively check whether the elements in arr can form a BST
    build(arr, min_val, max_val) {
        if (this.ind === arr.length) return;  // If the index reaches the length of the array, return
        
        const val = arr[this.ind];  // Get the current value
        
        // If the current value is not within the valid range, return
        if (!(min_val < val && val < max_val)) {
            return;
        }

        this.ind += 1;  // Move to the next element
        
        // Recursively build left and right subtrees
        this.build(arr, min_val, val);  // Left child must be less than the current value
        this.build(arr, val, max_val);  // Right child must be greater than the current value
    }
}
