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


function printArray(res, n) {
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
        let S = readLine();
        let obj = new Solution();
        let res = obj.removeOuter(S);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} S
 * @returns {string}
*/
class Solution
{
    //Function to remove the outermost parentheses from a valid parentheses string.
    removeOuter(S)
    {
        // Variable to store the current valid group of parentheses
        let currentGroup = "";

        // Variable to store the final result after removing outer parentheses
        let result = "";

        // Counter to keep track of nesting level
        let nestingLevel = 0;

        // Loop through each character in the string
        for (let i = 0; i < S.length; i++) {
            currentGroup += S[i];  // Add current character to the group

            // If it's an opening parenthesis, increment nesting level
            if (S[i] == "(") {
                nestingLevel++;
            }

            // If it's a closing parenthesis, decrement nesting level
            if (S[i] == ")") {
                nestingLevel--;
            }

            // If nesting level reaches zero, we found a complete outer group
            if (nestingLevel === 0) {
                // Remove outermost parentheses and add the inner part to result
                result += currentGroup.substring(1, currentGroup.length - 1);

                // Reset current group for the next outer group
                currentGroup = "";
            }
        }

        // Return the final result
        return result;
    }
}
