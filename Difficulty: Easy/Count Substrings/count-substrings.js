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
        let res = obj.countSubstr(s);
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
    countSubstr(s) {
        // Count the number of '1' in the string
        const countOfOnes = s.split('').filter(char => char === '1').length;
        
        // If there are at least 2 '1's, calculate the number of valid substrings
        if (countOfOnes > 1) {
            return (countOfOnes * (countOfOnes - 1)) / 2;
        }
        
        // If there are fewer than 2 '1's, no valid substring exists
        return 0;
    }
}
