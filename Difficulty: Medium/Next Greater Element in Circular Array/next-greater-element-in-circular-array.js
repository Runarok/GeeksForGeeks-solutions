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
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
    
        input_line = readLine().split(' ');
        let arr = new Array(n);
        for(let i=0;i<n;i++){
            arr[i] = BigInt(input_line[i]);
        }
        let obj = new Solution();
        let ans = obj.nextLargerElement(arr, n);
        let s="";
        for(let i=0;i<ans.length;i++)
        {
            if(ans[i]==BigInt(-0))
                ans[i]=BigInt(0);
            s+=ans[i];
            s+=" ";
        }
        console.log(s);
    }
}

// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {BigInt[]} arr - Input array of BigInt numbers
 * @param {number} n - Size of the array
 * @returns {BigInt[]} - Array of next larger elements for each index
 */

class Solution {
    nextLargerElement(arr, n) {
        // Array to store the next greater elements
        let nextGreater = [];
        
        // Stack to keep track of elements for comparison
        let stack = [];
        
        // Iterate from the end of the circular array (2*n - 1) to the beginning
        for (let i = 2 * n - 1; i >= 0; i--) {
            
            // Remove elements from the stack that are smaller or equal to arr[i % n]
            while (stack.length && arr[i % n] >= stack[stack.length - 1]) {
                stack.pop();
            }
            
            // Only assign values for the first n elements
            if (i < n) {
                // If stack is not empty, the top element is the next greater element
                // Otherwise, there is no greater element, so assign -1
                nextGreater[i] = stack.length ? stack[stack.length - 1] : -1;
            }
            
            // Push the current element onto the stack for future comparisons
            stack.push(arr[i % n]);
        }
        
        return nextGreater;
    }
}
