//{ Driver Code Starts
//Initial Template for javascript

// Initial Template for javascript
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
        let n = parseInt(readLine());
        let St = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        obj.reverse(St, n);
        let S = "";
        for(let i=0; i<n; i++){
            S+=St[i]+" ";
        }
        console.log(S);
    
console.log("~");
}
}

// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} St
 * @returns {string}
*/

class Solution {
    // Function to reverse a string.
    reverse(str) {
        // Helper function to insert a value back into the stack
        function insert(stack, tempValue) {
            if (!stack.length) {
                stack.push(tempValue);
                return;
            }

            // Pop the last value and recursively insert the tempValue
            const topValue = stack.pop();
            insert(stack, tempValue);
            stack.push(topValue);
        }

        // Helper function to reverse the string using stack
        function reverseString(stack) {
            // Base case: if there's only one element, return the stack
            if (stack.length === 1) {
                return stack;
            }

            // Pop the top value and reverse the rest of the stack
            const topValue = stack.pop();
            reverseString(stack);

            // Insert the top value back to the stack at the right position
            insert(stack, topValue);
            return stack;
        }

        // Convert the string to an array of characters, reverse it, and join it back into a string
        return reverseString(str);
    }
}
