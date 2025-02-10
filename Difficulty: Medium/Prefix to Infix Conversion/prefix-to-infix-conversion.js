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
        let prefix = readLine();
        let obj = new Solution();
        let res = obj.preToInfix(prefix);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends

class Solution {
    /**
     * Function to convert a prefix expression to an infix expression.
     * @param {string} pre_exp - The prefix expression.
     * @returns {string} - The equivalent infix expression.
     */
    preToInfix(pre_exp) {
        let operators = new Set(["+", "-", "*", "/", "%"]); // Set of valid operators
        let stack = []; // Stack to store operands and intermediate expressions

        // Traverse the prefix expression from right to left
        for (let i = pre_exp.length - 1; i >= 0; i--) {
            let ch = pre_exp[i];

            // If character is an operator, pop two operands from the stack
            if (operators.has(ch)) {
                let operand1 = stack.pop();
                let operand2 = stack.pop();

                // Form an infix expression with parentheses
                let expression = `(${operand1}${ch}${operand2})`;

                // Push the new expression back onto the stack
                stack.push(expression);
            } else {
                // If character is an operand, push it onto the stack
                stack.push(ch);
            }
        }

        // The final expression stored in the stack is the infix expression
        return stack[0];
    }
}
