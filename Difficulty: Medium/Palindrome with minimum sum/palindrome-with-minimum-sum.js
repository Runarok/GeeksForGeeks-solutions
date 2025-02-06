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

function printList(res,n){
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
        let s = readLine();
        let obj = new Solution();
        let res = obj.minimumSum(s);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} s
 * @returns {number}
*/

class Solution {
    minimumSum(s) {
        let pos = []; // Array to store characters that are not '?'
        let n = s.length; // Length of the input string

        // Iterate through the string and compare characters from both ends
        for (let i = 0; i < n; i++) {
            // If characters at mirrored positions are different
            if (s[i] !== s[n - i - 1]) {
                // If one of them is '?', replace it with the other character
                if (s[i] === '?') {
                    s = s.slice(0, i) + s[n - i - 1] + s.slice(i + 1); // Replace '?' with the character from the other end
                }
                else if (s[n - i - 1] === '?') {
                    s = s.slice(0, n - i - 1) + s[i] + s.slice(n - i); // Replace '?' with the character from the other end
                }
                else {
                    return -1; // If neither character is '?' and they don't match, return -1
                }
            }
            // If the character is not '?', add it to the pos array
            if (s[i] !== '?') {
                pos.push(s[i]);
            }
        }

        // If there are no or only one non-'?' character, return 0
        if (pos.length <= 1) {
            return 0;
        }

        let res = 0; // Variable to accumulate the sum of absolute differences
        // Calculate the sum of absolute differences between consecutive characters in pos
        for (let i = 1; i < pos.length; i++) {
            res += Math.abs(pos[i].charCodeAt(0) - pos[i - 1].charCodeAt(0));
        }
        return res; // Return the final result
    }
}
