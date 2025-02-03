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
        let A = readLine().trim().split(" ").map((x) => parseInt(x));
        let B = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res=obj.isStackPermutation(N,A,B);
        console.log(res);
        
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {number} N
 * @param {number[]} A
 * @param {number[]} B
 * @returns {number}
*/


class Solution {
    // Function to check whether the given arrays represent a valid stack permutation or not.
    isStackPermutation(N, A, B) {
        let stack = [];
        let j = 0;

        // Iterate through the elements of array A
        for (let i = 0; i < N; i++) {
            // If the current element in A doesn't match B[j], push A[i] to the stack
            if (A[i] !== B[j]) {
                while (stack.length !== 0 && stack[stack.length - 1] === B[j]) {
                    stack.pop();  // Pop elements that match B[j]
                    j++;  // Move to the next element in B
                }
                stack.push(A[i]);  // Push A[i] onto the stack
            } else {
                j++;  // If A[i] matches B[j], increment j
            }
        }

        // Check if any remaining elements in the stack can be matched with B
        while (stack.length !== 0 && stack[stack.length - 1] === B[j] && j < N) {
            stack.pop();
            j++;
        }

        // If the stack is empty, it means the permutation is valid
        if (stack.length) return 0;  // If the stack is not empty, return 0 (invalid permutation)

        return 1;  // Valid stack permutation
    }
}
