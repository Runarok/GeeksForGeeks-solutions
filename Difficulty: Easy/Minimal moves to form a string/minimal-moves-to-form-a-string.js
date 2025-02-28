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
        let obj = new Solution();
        let res = obj.minSteps(S);
        if(res==-0)
            res=0;
        console.log(res);
    
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} S
 * @returns {number}
*/
class Solution {
    
    // Helper function to check if two arrays are the same.
    is_same(array1, array2) {
        return (array1.length === array2.length) &&
               array1.every((element, index) => element === array2[index]);
    }
    
    // Function to find the minimum number of operations required to make a string palindrome-like.
    minSteps(s) {
        // Edge case: Empty string needs 0 steps.
        if (s.length === 0) {
            return 0;
        }

        // Edge case: Single character string needs only 1 step.
        if (s.length === 1) {
            return 1;
        }

        // Convert string to array of characters.
        let characters = s.split("");
        let length = characters.length;

        // Prepend an empty string to align 1-based indexing.
        characters.unshift("");

        // Array to store minimum steps required for each length.
        let minSteps = Array(length + 1).fill(-1);
        minSteps[1] = 1;

        // Array to store the current substring being processed.
        let currentSubstring = [""];
        currentSubstring.push(characters[1]);

        // Process each character in the string.
        for (let i = 2; i <= length; i++) {
            currentSubstring.push(characters[i]);

            if (i % 2 === 0) {
                // For even length, split into two halves.
                const leftHalf = currentSubstring.slice(1, i / 2 + 1);
                const rightHalf = currentSubstring.slice(i / 2 + 1);

                // If both halves are the same, it can be reduced using a repeated substring.
                if (this.is_same(leftHalf, rightHalf)) {
                    minSteps[i] = Math.min(minSteps[i / 2], minSteps[i - 1]) + 1;
                } else {
                    minSteps[i] = minSteps[i - 1] + 1;
                }
            } else {
                // For odd length, just add one step from previous length.
                minSteps[i] = minSteps[i - 1] + 1;
            }
        }

        // Return the minimum steps required for the entire string.
        return minSteps[length];
    }
}
