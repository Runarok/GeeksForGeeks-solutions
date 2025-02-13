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
        let res = obj.isRepeat(s);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends


// } Driver Code Ends

/**
 * @param {string} s
 * @returns {number}
*/

class Solution {
    isRepeat(s) {
        // Create a string by concatenating s with itself.
        let t = s + s;
        
        // Remove the first and last characters of the concatenated string.
        let trimmed = t.slice(1, -1);
        
        // Check if the original string is present in the trimmed string.
        // If it is, the string can be constructed by repeating a substring.
        if (trimmed.includes(s)) {
            return 1; // The string is a repetition of a smaller substring.
        }
        
        return 0; // The string is not a repetition of any smaller substring.
    }
}
