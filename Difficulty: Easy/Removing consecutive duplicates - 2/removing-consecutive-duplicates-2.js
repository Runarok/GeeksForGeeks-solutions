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
        let str = readLine();
        let obj = new Solution();
        let ans = obj.removePair(str);
        if(ans == ""){
            console.log("Empty String");
        }
        else{
            console.log(ans);
        }
        
    
console.log("~");
}
}
// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {string} s
 * @returns {string}
 */

class Solution 
{
    // Function to remove pair of duplicates from given string using Stack.
    removePair(s)
    {
        // Get the length of the string
        let n = s.length;
        let len = 0;  // Variable to track the current position in the stack
        let stack = [];  // Stack to store characters
        
        // Push the first character into the stack
        stack.push(s[0]);
        
        // Iterate over the rest of the string
        for(let i = 1; i < n; i++){
            // If the current character is equal to the top of the stack, pop the stack (remove pair)
            if(stack[len] == s[i]){
                stack.pop();
                len--;  // Decrement the stack size
            } else {
                // If not a duplicate, push the character onto the stack
                len++;
                stack[len] = s[i];
            }
        }
        
        // If no characters remain, return an empty string
        if(len == -1) return '';
        
        // Join the stack into a string and return the result
        stack = stack.join('');
        return stack;
    }
}
