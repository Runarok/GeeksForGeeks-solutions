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
        let exp = readLine().trim();
        let obj = new Solution();
        let res=obj.postToPre(exp);
        console.log(res);
    
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for JavaScript
/**
 * @param {string} post_exp
 * @returns {string}
 */

class Solution {
    
    constructor() {
        // Define the priority of operators for precedence in the expression
        this.Priority = {
            '+' : 1,
            '-' : 1,
            '*' : 2,
            '/' : 2,
            '%' : 2,
            '^' : 3,
            '(' : 0,
        };
        
        // List of all operators and parentheses
        this.Operators = ['+', '-', '*', '/', '^', '%', '(', ')'];
    }
    
    // Check if the character is an operator
    isOperator(x) {
        return this.Operators.includes(x);
    }
    
    // Check if the character is an operand (a letter or number)
    isOperand(x) {
        return (x >= 'a' && x <= 'z') 
            || (x >= 'A' && x <= 'Z') 
            || (x >= '0' && x <= '9');
    }

    // Function to convert a postfix expression to a prefix expression
    postToPre(post_exp) {
        const n = post_exp.length;  // Get the length of the postfix expression
        const st = [];  // Stack to hold operands and intermediate results
        let i = 0;

        // Traverse the postfix expression from left to right
        while (i < n) {
            const x = post_exp[i];

            // If the character is an operand, push it to the stack
            if (this.isOperand(x)) {
                st.push(x);
            } else {
                // If the character is an operator, pop two operands from the stack
                const t1 = st.pop();
                const t2 = st.pop();
                
                // Create a new string by combining the operator with the operands
                const s = x + t2 + t1;
                
                // Push the new expression back to the stack
                st.push(s);
            }
            i++;
        }

        // The result will be the only element left in the stack
        return st.pop();
    }
}
