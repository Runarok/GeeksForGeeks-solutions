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
        let n = parseInt(readLine());
        let s = readLine().trim().split(" ");
        let obj = new Solution();
        let ans = obj.orderString(s, n);
        if(ans[1]==undefined)
        ans[1] = "";
        console.log(ans[0] + " " + ans[1]);
    
console.log("~");
}
}

// } Driver Code Ends

//User function Template for javascript
/**
 * @param {string} s
 * @param {number} n
 * @returns {string[]}
*/

class Solution
{
    // Function to find and return the smallest and largest characters in the string.
    orderString(s, n)
    {
        let smallestCharacter = s[0];
        let largestCharacter = s[0];

        for (let i = 1; i < n; i++) {
            if (s[i] > largestCharacter) {
                largestCharacter = s[i];
            }
            
            if (s[i] < smallestCharacter) {
                smallestCharacter = s[i];
            }
        }
        
        return [smallestCharacter, largestCharacter];
    }
}
