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
        let s = readLine().trim();
        let obj = new Solution();
        let res = obj.check(s);
        if(res){
            console.log("YES");
        } else {
            console.log("NO");
        }
    
console.log("~");
}
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} s
 * @return {boolean}
*/

class Solution {
    check(s){
       // Store the first character of the string
       let firstChar = s[0];
       
       // Iterate through each character in the string
       for (let char of s){
           // If any character is different from the first one, return false
           if (firstChar !== char){
               return false;
           }
       }
       
       // If all characters are the same, return true
       return true;
    }
}
