//{ Driver Code Starts
//Initial Template for javascript

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
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let k = input_ar0[1];
        
        let obj = new Solution();
        let ans = obj.safePos(n, k);
        
        console.log(ans);
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript

class Solution {
    // Function to find the safe position in a circle of people with step k
    safePos(n, k) {
        // Create an array representing the people (from 1 to n)
        const arr = [];
        for (let i = 1; i <= n; i++) {
            arr.push(i);  // Populate the array with numbers representing the positions
        }
        // Call the helper function to find the safe position starting from index 0
        return this.getSafePos(arr, 0, k - 1);
    }
    
    // Recursive function to find the safe position
    getSafePos(arr, currentIndex, stepSize) {
        // Base case: If only one person is left, return their position
        if (arr.length === 1) {
            return arr[0];
        }
        
        // Calculate the new index by applying the step size and taking modulus to handle wrap-around
        currentIndex = (currentIndex + stepSize) % arr.length;
        
        // Remove the person at the current index from the circle
        arr.splice(currentIndex, 1);
        
        // Recursively call the function to find the safe position in the smaller circle
        return this.getSafePos(arr, currentIndex, stepSize);
    }
}
