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
        let s = readLine();
        let obj = new Solution();
        console.log(obj.countRev(s));
        
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} s
 * @returns {number}
*/

class Solution {
    //Function to count the number of minimum reversals.
countRev(s) {
    // If the length of the string is odd, return -1 as it's not possible to balance
    if (s.length % 2 === 1) {
        return -1;
    }

    let stack = [];
    let ans = 0;

    // Iterate through each character in the string
    for (let val of s) {
        if (val === '{') {
            // If it's an opening brace, push it to the stack
            stack.push(val);
        } else {
            // If it's a closing brace, check if the stack is empty
            if (stack.length === 0) {
                // If empty, we need to add an opening brace to balance
                ans += 1;
                stack.push('{');
            } else {
                // Otherwise, pop the matching opening brace
                stack.pop();
            }
        }
    }

    // The remaining elements in the stack need to be paired
    ans += stack.length / 2;
    return ans;
}

}