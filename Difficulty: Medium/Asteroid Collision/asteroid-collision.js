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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let ob = new Solution();
        let ans = ob.asteroidCollision(N,arr);
        let res = "";
        for(let o in ans)
            res += ans[o] + " ";
        console.log(res);
        
    
console.log("~");
}
}

// } Driver Code Ends

// User function Template for javascript
/**
 * @param {number} N
 * @param {number[]} asteroids
 * @returns {number[]}
 */

class Solution {
    // Function to find out the remaining asteroids after collisions
    asteroidCollision(N, arr)
    {
        // Stack to track asteroids moving right
        let stack = [];
        
        // Iterating through all asteroids
        for(let i = 0; i < N; i++) {
            // If asteroid is moving right, push it onto stack
            if(arr[i] > 0) {
                stack.push(arr[i]);
            } 
            else {
                // Handle collisions with moving left asteroids
                while(stack.length !== 0 && stack[stack.length - 1] > 0 && Math.abs(arr[i]) > stack[stack.length - 1]) {
                    stack.pop();  // Pop right-moving asteroids smaller than current
                }

                // If same size, both asteroids destroy each other
                if(stack.length !== 0 && stack[stack.length - 1] === Math.abs(arr[i])) {
                    stack.pop();
                } 
                else if(stack.length === 0 || stack[stack.length - 1] < 0) {
                    stack.push(arr[i]);  // Push current asteroid to stack
                }
            }
        }
        return stack;  // Return remaining asteroids after all collisions
    }
}
