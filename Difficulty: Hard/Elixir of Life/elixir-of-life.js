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
        let str = readLine();
        let obj = new Solution();
        let res = obj.maxFrequency(str);
        console.log(res);
        
    
console.log("~");
}
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript
/**
 * @param {string} S
 * @returns {number}
*/

class Solution {
    // Function to find the maximum frequency of the repeating prefix and suffix.
    maxFrequency(S) {
        // Loop through possible prefix lengths
        for (let length = 1; length < S.length; length++) {
            // Check if the prefix matches the suffix
            if (S.substring(0, length) === S.substring(S.length - length)) {
                return this.countSubstring(S, S.substring(0, length));
            }
        }
        return 1;
    }
    
    // Helper function to count occurrences of a substring in the string
    countSubstring(str, substring) {
        let count = 0;
        let pos = str.indexOf(substring);
        while (pos !== -1) {
            count++;
            pos = str.indexOf(substring, pos + 1);
        }
        return count;
    }
}
