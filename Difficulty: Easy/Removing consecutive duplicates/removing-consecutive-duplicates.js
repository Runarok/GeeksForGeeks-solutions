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
        console.log(obj.removeConsecutiveDuplicates(str));
        
    
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
    // Function to remove consecutive duplicates from given string using Stack.
    removeConsecutiveDuplicates(s)
    {
        // Initialize an empty stack to hold characters.
        let st = [];
        
        // Loop through each character in the string.
        for(let i = 0; i < s?.length; i++){
            const x = s[i];
            
            // Push the character to the stack if it's not the same as the top of the stack.
            if(st[st.length - 1] !== x){
                st.push(x);
            }
        }
        
        // Return the final string formed by joining the stack.
        return st.join('');
    }
}
