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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let s = readLine();
        let obj = new Solution();
        let res = obj.minLength(s,n);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} str
 * @param {number} n
 * @returns {number}
*/

class Solution {
    minLength(s, n) {
        // Mapping of characters to their pair counterparts
        let pairs = { '0': '9', '1': '2', '2': '1', '3': '4', '4': '3', '5': '6', '6': '5', '7': '8', '8': '7', '9': '0' };
        
        // Stack to process the characters
        let stack = [];
        
        while (s.length > 0) {
            if (stack.length > 0) {
                let lastChar = stack[stack.length - 1];
                let currentChar = s[0];

                // Check if the last character in stack and current character form a pair
                if (pairs[lastChar] === currentChar) {
                    stack.pop(); // Remove the last character from the stack
                } else {
                    stack.push(currentChar); // Add the current character to the stack
                }
            } else {
                stack.push(s[0]); // Push the first character if stack is empty
            }

            // Move to the next character in the string
            s = s.substring(1);
        }

        return stack.length;
    }
}
