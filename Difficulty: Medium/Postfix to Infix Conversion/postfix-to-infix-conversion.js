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
    for(; i<t; i++) {
        let postfix = readLine().trim();
        let obj = new Solution();
        let res = obj.postToInfix(postfix);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} postfix
 * @returns {string}
*/

class Solution {
    // Function to convert postfix expression to infix expression.
    postToInfix(postfix) {
        let n = postfix.length - 1;
        let i = 0;
        let st = [];

        // Iterate over the postfix expression
        while (i <= n) {
            // If the current character is an operand (A-Z, a-z, 0-9), push it onto the stack
            if ((postfix[i] >= "A" && postfix[i] <= 'Z') || 
                (postfix[i] >= "a" && postfix[i] <= 'z') || 
                (postfix[i] >= '0' && postfix[i] <= '9')) {
                st.push(postfix[i]);
            } else {
                // If the current character is an operator, pop the two operands from the stack
                let t1 = st[st.length - 1];
                st.pop();
                let t2 = st[st.length - 1];
                st.pop();

                // Create a new string in the form of an infix expression (with parentheses around the operands)
                let temp = '(' + t2 + postfix[i] + t1 + ')';
                st.push(temp);
            }
            i++;
        }

        // The final result will be the only element left in the stack
        return st.pop();
    }
}
