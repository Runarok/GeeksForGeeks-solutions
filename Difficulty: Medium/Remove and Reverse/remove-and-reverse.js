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
        
        let str = readLine().trim();
        let obj = new Solution();
        let res = obj.removeReverse(str);
        console.log(res);
    
console.log("~");
}
}

// } Driver Code Ends


// User function Template for JavaScript

/**
 * @param {string} S
 * @returns {string}
 */

class Solution {
    // Function to reverse a string and return it
    removeReverse(S)
    {
        // If the string length is 1, return it directly
        if(S.length == 1) return S;

        // Create a frequency map to store the count of each character in the string
        let store = {};
        for (let x of S) {
            if (store.hasOwnProperty(x)) {
                store[x] += 1;
            } else {
                store[x] = 1;
            }
        }

        // Initialize pointers and variables
        let l = 0, r = S.length - 1;
        let count = 0, flip = true;
        let front = '', back = '';

        // Process the string from both ends
        while (l <= r) {
            let holder;
            if (flip) holder = S[l++];
            else holder = S[r--];

            // If the character has more than one occurrence, toggle the flip
            if (store[holder] > 1) {
                count++;
                store[holder] -= 1;
                flip = !flip;
            } else {
                // Add the character to the front or back string based on the flip
                if (flip) front += holder;
                else back = holder + back;
            }
        }

        // If count is odd, reverse the final string
        if (count % 2 == 1) return (front + back).split("").reverse().join("");
        
        // Return the final string without reversing
        return (front + back).toString();
    }
}
