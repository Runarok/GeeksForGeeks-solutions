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
        let S = readLine().trim();
        let target = parseInt(readLine());
        let obj = new Solution();
        let res = obj.addOperators(S, target);
        res.sort();
        let ans="";
        for(let i=0; i<res.length; i++){
            ans+=res[i];
            ans+=" ";
        }
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} S
 * @param {number} target
 * @returns {string[]}
*/

//User function Template for javascript
/**
 * @param {string} S
 * @param {number} target
 * @returns {string[]}
*/

class Solution {
    //Function to add operators in the given string to get the target value.
    addOperators(S, target) {
       
        let num = S; // Store the input string
        const result = []; // To store the final results (expressions that evaluate to the target)

        //backtrack(index, expression, current, prev)
        backtrack(0, "", 0, 0);  // Start the backtracking process with initial values

        return result; // Return the array containing the expressions that match the target value


        /**
         * Helper function to perform backtracking.
         * @param {number} index - Current index in the string `num`.
         * @param {string} expression - Current mathematical expression being built.
         * @param {number} current - The current result of the evaluated expression.
         * @param {number} prev - The last operand used in the expression.
         */
        function backtrack(index, expression, current, prev) {
            // Base case: if we've reached the end of the string
            if (index === num.length) {
                // If the evaluated result matches the target, add it to the result array
                if (current === target) {
                    result.push(expression);
                }
                return;
            }

            // Iterate over the string starting from the current index
            for (let i = index; i < num.length; i++) {
                // If there's a leading zero, skip the number (e.g., 05, 012)
                if (i !== index && num[index] === "0") break;

                const operandStr = num.slice(index, i + 1); // Get the operand as a substring
                const operand = parseInt(operandStr); // Convert the operand to an integer

                // If we're at the start of the string, just add the operand to the expression
                if (index === 0) {
                    backtrack(i + 1, operandStr, operand, operand);
                } else {
                    // Explore all three possible operators: *, +, and -
                    // Multiply
                    backtrack(
                        i + 1,
                        expression + "*" + operandStr,  // Append "*" to the current expression
                        current - prev + prev * operand, // Evaluate the expression with multiplication
                        prev * operand  // Set the previous operand as multiplied value
                    );
                    // Add
                    backtrack(
                        i + 1,
                        expression + "+" + operandStr,  // Append "+" to the current expression
                        current + operand,  // Evaluate the expression with addition
                        operand  // Set the previous operand to the current operand
                    );
                    // Subtract
                    backtrack(
                        i + 1,
                        expression + "-" + operandStr,  // Append "-" to the current expression
                        current - operand,  // Evaluate the expression with subtraction
                        -operand  // Set the previous operand to the negative value of current operand
                    );
                }
            }
        }
    }
}
