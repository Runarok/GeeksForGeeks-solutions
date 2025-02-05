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
        let prefix = readLine();
        let obj = new Solution();
        let res = obj.preToPost(prefix);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

// User function Template for JavaScript
/**
 * @param {string} pre_exp
 * @returns {string}
*/

class Solution {
    // Function to convert prefix expression to postfix expression.
    preToPost(pre_exp) {
        const stack = [];
        
        // Loop through the prefix expression from right to left
        for (let i = pre_exp.length - 1; i >= 0; i--) {
            // If the current character is an operator
            if (pre_exp[i] === '^' || pre_exp[i] === '/' || pre_exp[i] === '*' || pre_exp[i] === '-' || pre_exp[i] === '+') {
                // Pop two operands, combine them with the operator, and push the result back to the stack
                let op1 = stack.pop();
                let op2 = stack.pop();
                let temp = op1 + op2 + pre_exp[i];  // operator goes after operands in postfix
                stack.push(temp);
            } else {
                // If the current character is an operand, push it onto the stack
                stack.push(pre_exp[i]);
            }
        }
        
        // The result is the only element left in the stack
        return stack[0];
    }
}
