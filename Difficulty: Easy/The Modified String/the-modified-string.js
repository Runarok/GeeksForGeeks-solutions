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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split();
        let a = input_line[0];
        let obj = new Solution();
        let ans = obj.modified(a);
        console.log(ans);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {string} a
 * @returns {number}
*/
class Solution {
    modified(a) {
        let removalCount = 0;
        
        // Loop starts from the 3rd character (index 2), because we are checking triplets.
        for (let i = 2; i < a.length; i++) {
            // Check if current character and the previous two characters are the same.
            if (a[i] === a[i - 1] && a[i] === a[i - 2]) {
                removalCount++;   // Increment count as we need to remove one character.
                i++;               // Skip the next character to avoid overlapping triplets.
            }
        }
        
        return removalCount;
    }
}
